const express = require("express")
const mongoose = require("mongoose")

const orderRoutes = require("./src/routes/orderRoutes")

const app = express()

app.use(express.json())
app.use(orderRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/orders")
.then(() => console.log("MongoDB conectado"))
.catch(err => console.log(err))

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})