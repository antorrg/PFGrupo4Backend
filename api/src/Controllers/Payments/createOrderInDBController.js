const { PurchaseOrder } = require("../../database");

const createOrderInDBController = async ( userID, itemsData, req, res) => {
  //console.log(name+'/'+description+'/'+image+'/'+released+'/'+genres+'/'+platforms+'/'+price+'/'+physicalGame+'/'+stock)
  try {
    //console.log("Error 01");
    //return "Order_created";
    const createOrder = await PurchaseOrder.create({
      userId: userID,
      itemsData: itemsData,
      //totalCost: 500,
      status: "pending"
      //preferenceId: preferenceId
    });

    if (createOrder) {
      return createOrder;
    } else {
      res.status(500).send("Order_not_created");
    }
    return "Order_created";
  } catch (error) {
    console.log("Error 02");
    res.status(500).send("createOrderInDB not found");
  }
};

module.exports = createOrderInDBController;