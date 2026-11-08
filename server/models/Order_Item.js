module.exports = (sequelize, DataTypes) => {
  const Order_Item = sequelize.define('Order_Item', {
  
  });

  Order_Item.associate = (models) => {
    Order_Item.belongsTo(models.Product);
  };

  return Order_Item;
};