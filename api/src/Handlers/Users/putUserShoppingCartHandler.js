const putUserShoppingCartController = require("../../Controllers/Users/putUserShoppingCartController");

const putUserShoppingCartHandler = async (req, res) => {
  const  { userID }  = req.params;
  const { cartItems } = req.body;

  //console.log("userID: " + userID);
  //console.log("cartItems: " + JSON.stringify(cartItems));

  try {
    const response = await putUserShoppingCartController(userID, JSON.stringify(cartItems));
    res.status(200).json(response);
    //res.status(200).json({res: "OK"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = putUserShoppingCartHandler;