import mongoose from 'mongoose';


class User {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
}

export default User;

const user = new mongoose.Schema({
  username:String,
  password:String, 
  fullname:String, 
  email:String, 
  phone:String, 
  birthday:String, 
  role:Boolean,

})

const userModel = new mongoose.model("Collection",user)
