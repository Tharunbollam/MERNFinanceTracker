const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController')
const { protect } = require('../middleware/authmiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router
















// const express = require("express");
// const {
//   loginController,
//   registerController,
// } = require("../controllers/userController");

// //router object
// const router = express.Router();



// //routers
// // POST || LOGIN USER
// router.post("/login", loginController);

// //POST || REGISTER USER
// router.post("/register", registerController);

// module.exports = router;