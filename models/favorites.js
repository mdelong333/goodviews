module.exports = function(sequelize, DataTypes) {
    var Favorite = sequelize.define("Favorite", {
        title: DataTypes.STRING,
        fave: DataTypes.BOOLEAN
    });
    return Favorite;
};