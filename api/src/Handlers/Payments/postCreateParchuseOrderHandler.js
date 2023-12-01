const postCreateParchuseOrderController = require("../../Controllers/Payments/postCreateParchuseOrderController");
const createOrderInDBController = require("../../Controllers/Payments/createOrderInDBController");
const updateOrderProferenceIdController = require("../../Controllers/Payments/updateOrderProferenceIdController");

const postCreateParchuseOrderHandler = async (req, res) => {
  const { userID, items } = req.body;

  if(!items || items.length === 0) {
    res.status(400).json({ error: "No items attached" });
  }

  const auxItems = items.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity,
      unitPrice: item.unit_price,
      currencyId: item.currency_id
    };
  });

  try {
    //------------------------------

    const createOrderDB = await createOrderInDBController(userID, JSON.stringify(auxItems));
    
    const orderBodyMercadoPago = await postCreateParchuseOrderController(userID, items, createOrderDB.id.toString());

    const updateOrder = await updateOrderProferenceIdController(createOrderDB.id, orderBodyMercadoPago.id);

    res.status(201).json({ body: orderBodyMercadoPago});
    //------------------------------

    //res.status(201).json({ body: orderBody});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = postCreateParchuseOrderHandler;