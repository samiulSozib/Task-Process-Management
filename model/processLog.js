module.exports=(sequelize, DataTypes)=>{
    const Log = sequelize.define('Log', {
        process_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        time_log: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    return Log
}