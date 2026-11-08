module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
   
    });

    //association
    Product.associate = (models) => {
        Product.hasMany(models.Order_Item)
    };
    return Product;
};