const express = require("express")

const router = express.Router()
const adminController = require("../controllers/AdminController")

router.post("/login", adminController.login)
router.post("/signup", adminController.signup)
router.post("/uploadData", adminController.uploadData)

router.get("/getInfo/:name", adminController.getInfo)
router.get("/getYearInfo/:year", adminController.getYearInfo)
router.get("/getMonthInfo/:month", adminController.getMonthInfo)
router.get("/getPodium/:year", adminController.getPodium)

module.exports = router