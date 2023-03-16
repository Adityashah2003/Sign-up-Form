const mongoose = require("mongoose");
const db = require('./db');

const userSchema = new Schema({
    userName: {
      type: String,
      unique: true,
      required: true,
      maxlength: 25,
    },
    // firstName: {
    //   type: String,
    //   required: true,
    // },
    // lastName: {
    //   type: String,
    //   required: true,
    // },
    // phoneNo: {
    //   type: String,
    //   required: true,
    // },
    // regNo: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    password: {
      type: String,
      required: true,
      minlength: 7,
    },
    role :{
        type: String,
        required : true
    }
  },
  {
      timestamps: true
  }
  );

const user = mongoose.model('User', userSchema);
module.exports = user;