const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    profile_pic: { type: String, default: '/images/default_user.png' }, 
});
//"users" it is a collection name
const User = mongoose.model("users", userSchema);
module.exports = User;