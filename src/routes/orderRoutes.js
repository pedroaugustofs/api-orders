const express = require("express")
const router = express.Router()

const orderController = require("../controllers/orderController")

router.post("/order", orderController.createOrder)

router.get("/order/:orderId", orderController.getOrderByNumber)

router.get("/order/list", orderController.getOrders)

router.delete("/order/:orderId", orderController.deleteOrder)

module.exports = router