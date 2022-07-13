module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    myDate: {
      type: DataTypes.DATE,
      // defaultValue: Sequelize.NOW
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  return User;
};
