module.exports=(sequelize, DataTypes)=>{
    const Process = sequelize.define('Process', {
        creation_time: {
            type: DataTypes.DATE,
        }
    });

    return Process
}
