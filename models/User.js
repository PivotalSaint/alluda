const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

//User Models
class User extends Model {}

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
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports=User;