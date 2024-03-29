const { DataTypes } = require('sequelize');

const FavoriteModel= (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      status: {
         type: DataTypes.ENUM('Alive','Dead','Unknwon'),
         allowNull: false
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false
      },
      gender: {
         type: DataTypes.ENUM('Female','Male','Genderless','Unknown'),
         allowNull:false
      },
      origin:{
         type: DataTypes.STRING,
         allowNull: false
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, { timestamps: false });
};

module.exports ={ 
   FavoriteModel
 }