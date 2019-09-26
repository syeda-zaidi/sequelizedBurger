module.exports = function (sequelize, DataTypes) {
    var Burgers = sequelize.define("Burgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });
    return Burgers;
};