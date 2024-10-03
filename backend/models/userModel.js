const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)













// const mongoose = require("mongoose");

// //schema design
// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "name is required"],
//     },
//     email: {
//       type: String,
//       required: [true, "email is required and should be unique"],
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: [true, "password is required"],
//     },
//   },
//   { timestamps: true }
// );

// //export
// const userModel = mongoose.model("users", userSchema);
// module.exports = userModel;