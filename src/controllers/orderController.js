const Order = require("../models/order")

exports.createOrder = async (req, res) => {

  try {

    const data = req.body

    const mappedOrder = {

      orderId: data.numeroPedido,
      value: data.valorTotal,
      creationDate: new Date(data.dataCriacao),

      items: data.items.map(item => ({
        productId: Number(item.idItem),
        quantity: item.quantidadeItem,
        price: item.valorItem
      }))

    }

    const order = await Order.create(mappedOrder)

    res.status(201).json(order)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

}

exports.getOrderByNumber = async (req, res) => {

  try {

    const order = await Order.findOne({
      orderId: req.params.orderId
    })

    if (!order) {
      return res.status(404).json({
        message: "Pedido não encontrado"
      })
    }

    res.json(order)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

}

exports.getOrders = async (req, res) => {

  try {

    const orders = await Order.find()

    res.json(orders)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

}

exports.deleteOrder = async (req, res) => {

  try {

    const order = await Order.findOneAndDelete({
      orderId: req.params.orderId
    })

    if (!order) {
      return res.status(404).json({
        message: "Pedido não encontrado"
      })
    }

    res.json({
      message: "Pedido deletado com sucesso"
    })

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

}