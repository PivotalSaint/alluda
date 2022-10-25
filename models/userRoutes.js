const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//User Models
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//Tables columns and configuraton
User.init(
    {
        //Table Definitions
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        //Defines a password column
        password: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }

    },
    {
        hooks:{
          // set up beforeCreate lifecycle "hook" functionality
          beforeCreate: async (newUserData) =>{
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },
    
          // set up beforeUpdate lifecycle "hook" functionality
          beforeUpdate: async (updatedUserData) =>{
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
          }
        },
    
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;