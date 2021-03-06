
const dataController = require("../controllers/DataController")
const express = require("express")

const router = express.Router()

router.get("/getInfo/:name", dataController.getInfo)
router.get("/getAllData", dataController.getAllData)
router.get("/getYearInfo/:year", dataController.getYearInfo)
router.get("/getMonthInfo/:month", dataController.getMonthInfo)
router.get("/getPodium/:year", dataController.getPodium)
router.get("/getSellersInfo", dataController.getSellersInfo)

module.exports = router