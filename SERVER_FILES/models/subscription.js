module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define("tbl_subscription", {
    subscription_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user_id: { type: DataTypes.INTEGER },
    email: { type: DataTypes.STRING },
    subscription_name: { type: DataTypes.STRING },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  return Subscription;
};
 