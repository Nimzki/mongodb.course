
var mongoose = require('mongoose');
const {Schema} = mongoose;
const UserSchema = new Schema({
 uname:String,
 umobile:Number,
 ugender:String
})
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;