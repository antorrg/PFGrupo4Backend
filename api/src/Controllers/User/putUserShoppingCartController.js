const { user } = require("../../database");

const putUserShoppingCartController = async (userID, cartItems, req, res) => {
    console.log("userID: " + userID);
    console.log("cartItems: " + cartItems);
  try {
    const [numUpdatedRows, updatedUser] = await user.update(
        { cart: cartItems },
        {
          where: {
            id: userID,
          },
          returning: true, // Devolver los registros actualizados
        }
      );

    if (numUpdatedRows === 0) {
        return res.status(404).json({ mensaje: 'usuario no encontrado' });
    }

    return updatedUser;

  } catch (error) {
    
    res.status(500).send("putUserShoppingCartController not found");
  }
};

module.exports = putUserShoppingCartController;