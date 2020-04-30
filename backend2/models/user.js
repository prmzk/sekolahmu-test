'use strict';
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    email:{ 
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please insert your email'
        }
      }
    },
    password:{ 
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please insert your password'
        },
        len: {
          args: [7],
          msg: 'Password is too short! Minimum length of 7'
        }
      }
    },
    name:{ 
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please insert your name'
        }
      }
    },
    otpKey:{
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, options) => {
        user.password = bcrypt.hashSync(user.password, 10)
        user.otpKey = user.name + Math.random()
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};