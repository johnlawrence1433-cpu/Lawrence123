module.exports = (sequelize, DataTypes) => {
    const Delivery = sequelize.define("Delivery", {
        deliveryDate: {
            type: DataTypes.DATE,
            allowNull: false
        },

        no_of_parcels: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        price: {
            type: DataTypes.DECIMAL(11, 2),
            allowNull: false
        }
    });

    // Association
    Delivery.associate = (models) => {
        Delivery.belongsTo(models.Riders)
    }

    return Delivery;
};