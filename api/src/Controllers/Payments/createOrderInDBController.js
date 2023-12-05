const { PurchaseOrder, PurchaseOrderItems } = require("../../database");

const createOrderInDBController = async ( userID, itemsData, req, res) => {
  
  //console.log("arrayBulk: " + JSON.stringify(arrayBulk));
  //return "ok";
  try {
    const createOrder = await PurchaseOrder.create({
      userId: userID,
      //itemsData: itemsData,
      //totalCost: 500,
      //status: "pending"
      status: "waiting"
      //preferenceId: preferenceId
    });

    if (createOrder) {
      const arrayBulk = itemsData.map(item => {
        return {
          itemId: item.id,
          quantity: item.quantity,
          unitPrice: item.unitPrice,
          currencyId: item.currencyId,
          orderId: createOrder.id
        };
      });

      const createOrderItems = await PurchaseOrderItems.bulkCreate(
        arrayBulk
      );
      
      if(createOrderItems) {
          return createOrder;
      } else {
          res.status(500).send("Items_not_created");    
      }
    } else {
      res.status(500).send("Order_not_created");
    }
    //return "Order_created";
  } catch (error) {
    console.log("Error 02");
    res.status(500).send("createOrderInDB not found");
  }
};

module.exports = createOrderInDBController;