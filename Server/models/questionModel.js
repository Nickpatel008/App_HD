module.exports = (sequelize , DataTypes) => {

    const Questions = sequelize.define('question_master' , {
        question_id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        user_id : { type : DataTypes.INTEGER },
        email : { type : DataTypes.STRING },
        question_title : { type : DataTypes.STRING },
        question_desc : { type : DataTypes.STRING },
        is_active : { type : DataTypes.INTEGER , defaultValue : 0 },
        is_deleted : { type : DataTypes.INTEGER , defaultValue : 0 },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    })

    return Questions

}