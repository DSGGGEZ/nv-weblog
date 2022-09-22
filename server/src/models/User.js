module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  name: DataTypes.STRING,
  lastname: DataTypes.STRING,
  status: DataTypes.STRING
  })
  User.prototype.comparePassword = function (password) {
  if (password == this.password) {
 153
  return true
  }
  return false
  }
  User.associate = function (models) {}
  return User
 }