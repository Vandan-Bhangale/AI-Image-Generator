const userModel = require('../model/userModel');

exports.postLogin = async (req,res) => {
    const {email,password} = req.body;

    try {
        const existingUser = await userModel.findOne({ email });

        if(!existingUser) {
            res.status(404).json({message:"User not found"});
        }

        if(existingUser.password !== password) {
            res.status(401).json({message:"Invalid password"});
        }
        // ✅ Store user in session
            req.session.user = {
                id: existingUser._id.toString(),
                email: existingUser.email
            };
            req.session.isLoggedIn = true;

            req.session.save(err => {
                if(err) {
                    console.log("Error while saving session: ",err);
                    return res.status(500).json({message: "Error while saving session"});
                } else {
                    console.log("Session saved successfully");
                    return res.status(200).json({message: "Login successful",
                        user: {id: existingUser._id.toString(), email: existingUser.email}
                    });
                }
            })
    } catch (err) {
        res.status(500).json({message:"Error Logging In",error:err.message});
    }
}

exports.getStatus = (req,res) => {
    const user = req.session.user;
    if(user) {
        res.status(200).json({isLoggedIn: true, user});
    } else {
        res.status(200).json({isLoggedIn: false});
    }
}

exports.postLogout = (req,res) => {
    req.session.destroy(err => {
        if(err) {
            console.log("Error while destroying session: ", err);
            return res.status(500).json({message: "Error while logging out"});
        } else {
            console.log("Session destroyed successfully");
            return res.status(200).json({message: "Logout successful"});
        }
    });
}

exports.postRegister = (req,res) => {
    const { name,email,password,confirmPassword} = req.body;

    const newUser = new userModel({
        name,
        email,
        password,
        confirmPassword 
    })

    newUser.save()
    .then(() => {
        res.status(201).json({ message: "User registered successfully" });
    })
    .catch((err) => {
        res.status(500).json({ message: "Error registering user", error: err.message });
    })
}