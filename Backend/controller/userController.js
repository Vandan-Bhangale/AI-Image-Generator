const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");

//Login function to post the user data to databse and login user
exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // ✅ Store user in session
    req.session.user = {
      id: existingUser._id.toString(),
      email: existingUser.email,
    };
    req.session.isLoggedIn = true;

    req.session.save((err) => {
      if (err) {
        console.log("Error while saving session: ", err);
        return res.status(500).json({ message: "Error while saving session" });
      }
      return res.status(200).json({
        message: "Login successful",
        user: {
          id: existingUser._id.toString(),
          email: existingUser.email,
        },
      });
    });
  } catch (err) {
    res.status(500).json({ message: "Error Logging In", error: err.message });
  }
};


//After login checking the user status whether the user is logged in or not
exports.getStatus = (req, res) => {
  const user = req.session.user;
  if (user) {
    res.status(200).json({ isLoggedIn: true, user });
  } else {
    res.status(200).json({ isLoggedIn: false });
  }
};

//Logout function to log out the user and clear the cookie from client and server side
exports.postLogout = (req, res) => {
  req.session.destroy((err) => {            //Clear the cookie from server
    if (err) {
      console.log("Error while destroying session: ", err);
      return res.status(500).json({ message: "Error while logging out" });
    } else {
      console.log("Session destroyed successfully");
      return res.status(200).json({ message: "Logout successful" });
    }
  });
};

//User registration function to register a new user
exports.postRegister = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error registering user", error: err.message });
  }
};
