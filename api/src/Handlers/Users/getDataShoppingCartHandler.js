const getDataShoppingCartController = require("../../Controllers/Users/getDataShoppingCartController");
const { Op } = require("sequelize");

const getDataShoppingCartHandler = async (req, res) => {
    const { cartItems } = req.body;

    const auxArray = cartItems.map(obj => (obj.id));

  console.log("cartItems: " + JSON.stringify(cartItems));
  console.log("auxArray: " + JSON.stringify(auxArray));

  try {
    const response = await getDataShoppingCartController(auxArray);
    res.status(200).json(response);
    //res.status(200).json("OK");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDataShoppingCartHandler;