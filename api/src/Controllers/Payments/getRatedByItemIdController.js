const { Sequelize }=require ('sequelize');
const { Rating } = require("../../database");

const getRatedByItemIdController = async (itemID, req, res) => {
    console.log("itemID 2: " + itemID);
    //console.log("cartItems: " + cartItems);
  try {
    const avgRatedItem = await Rating.findOne({
        where: {
            itemId: itemID
        },
        attributes: [
            [Sequelize.fn('AVG', Sequelize.col('score')), 'avgScore']
        ]
    });
    //return avgRatedItem.get('avgScore');
    const ratedItemData = await Rating.findAll({
        where: {
            itemId: itemID
        },
        attributes: [
            'score',
            [Sequelize.fn('COUNT', Sequelize.col('score')), 'count']
        ],
        group: ['score']
    });
    //return ratedItemData;
    const registerCounter = await Rating.count({
        where: {
            itemId: itemID,
        },
      });
      //return registerCounter;
    let arrayScorePercentajes = ratedItemData.map(aux => {
        const auxCount = +aux.get('count');
        return {
            score: aux.get('score'),
            count: auxCount,
            percent: (auxCount / registerCounter) * 100
        }
    });

     const lastTenRatings = await Rating.findAll({
        where: {
            itemId: itemID,
        },
        limit: 10,
        order: [['createdAt', 'DESC']]
      });
      
    return {
        avgScore: +avgRatedItem.get('avgScore'),
        scorePercentajes: arrayScorePercentajes,
        lastTenRatings
    };

  } catch (error) {
    
    res.status(500).send("putUserShoppingCartController not found");
  }
};

module.exports = getRatedByItemIdController;