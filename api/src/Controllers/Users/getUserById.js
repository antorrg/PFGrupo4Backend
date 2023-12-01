const { User } = require("../../database");

const getUserById = async (id) => {
    try {
      const infodb = await User.findByPk(id);
      if (!infodb) {
        throw new Error("User not found");
      }
     return infodb;
      
    } catch (error) {
      throw new Error({ error: error.message });
    }
  };
  
  module.exports=getUserById;