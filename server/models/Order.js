module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
    orderDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },

    });
   //association
    Order.associate = (models) => {
        Order.hasMany(models.Order_Item)
};
    return Order;
};