const updateOrderStatusController = require("../../Controllers/Payments/updateOrderStatusController");
const mercadopago = require("mercadopago");

const postPaymentResultWebhookHandler = async (req, res) => {
  
  console.log(req.query);
  const payment = req.query;

  try {
    if(payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      
      const updateOrderDB = await updateOrderStatusController(parseInt(data.body.external_reference), data.body.status, data.body.status_detail, data.body.id.toString());

      console.log(updateOrderDB);
      //const updateOrderResult = putParchuseOrderStatusController();
      //console.log(JSON.stringify(data));
      //console.log(data);
    }
    res.status(201).json({ result: "Resultado del pago" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = postPaymentResultWebhookHandler;