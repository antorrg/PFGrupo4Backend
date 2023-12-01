const { PurchaseOrder } = require("../../database");

const updateOrderStatusController = async (orderDB_id, orderStatus, orderStatusDetail, orderTransactionId, req, res) => {
  console.log("orderPreferenceId: " + typeof orderDB_id + ": " + orderDB_id);
  console.log("orderStatus: " + typeof orderStatus + ": " + orderStatus);
  console.log("orderStatus: " + typeof orderStatusDetail + ": " + orderStatusDetail);
  console.log("orderTransactionId: " + typeof orderTransactionId + ": " + orderTransactionId);
  try {
    const [numUpdatedRows, updatedOrder] = await PurchaseOrder.update(
        { 
          status: orderStatus,
          statusDetail: orderStatusDetail,
          transactionId: orderTransactionId
        },
        {
          where: {
            id: orderDB_id,
          },
          returning: true, // Devolver los registros actualizados
        }
      );

    if (numUpdatedRows === 0) {
        console.log("Error no hay filas");
        return res.status(404).json({ mensaje: 'orden no encontrado' });
    }

    return updatedOrder;

  } catch (error) {
    console.log("Error Otro");
    res.status(500).send("putParchuseOrderStatusController not found");
  }
};

module.exports = updateOrderStatusController;