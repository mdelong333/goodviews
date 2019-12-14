module.exports = function(sequelize, DataTypes) {
    var Favorite = sequelize.define("Favorite", {
        title: DataTypes.STRING,
        poster: DataTypes.STRING,
        summary: DataTypes.STRING,
        rating: DataTypes.STRING,
        year: DataTypes.STRING,
        fave: DataTypes.BOOLEAN,
    });
    return Favorite;
};