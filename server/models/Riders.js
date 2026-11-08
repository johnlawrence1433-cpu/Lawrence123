module.exports = (sequelize, DataTypes) => {
    const Riders = sequelize.define("Riders", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contactNo: {
        type: DataTypes.STRING(11)
    },
    faceId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    adress: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

//association
Riders.associate = (models) => {
    Riders.hasMany(models.Delivery);
}
   
    return Riders
};