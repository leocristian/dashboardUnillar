const express = require("express")

const router = express.Router()
const adminController = require("../controllers/AdminController")

router.post("/login", adminController.login)
router.post("/signup", adminController.signup)
router.post("/uploadData", adminController.uploadData)

module.exports = router