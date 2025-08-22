const mongoose = require('mongoose');

//User schema for MongoDB
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        reuired:true,
    },
})

//Create the User model using the user schema and saving it with name of User in DB
const User = mongoose.model('User',userSchema);

//export the User model
module.exports = User;