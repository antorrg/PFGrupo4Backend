const { PurchaseOrder } = require("../../database");

const getParchuseOrderController = async ( orderId, req, res ) => {
  console.log("orderId: " + typeof orderId + ": " + orderId);
  try {
    //const orderDataResult = await PurchaseOrder.findByPk(orderId);
    const orderDataResult = await PurchaseOrder.findOne({
      where: {
        id: orderId
      }
      /*through: {
        attributes: [],
      }*/
    });

    if(orderDataResult)
    {
      return orderDataResult
    } else {
      return "No_order_exists";
    }
    /*const { count, rows } = await PurchaseOrder.findAndCountAll({
      where: {
        id: orderId
      }
    });

    return {
      order: rows
    };*/
  } catch (error) {
    res.status(500).send("getVideogames not found");
  }
};

module.exports = getParchuseOrderController;
