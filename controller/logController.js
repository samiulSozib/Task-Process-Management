const db=require('../model/database');

exports.createLog=async (process_id) => {
    try {
        const time_log = new Date();
        await db.log.create({ process_id, time_log });
        console.log(`Log created for process ${process_id}:`, time_log);
    } catch (error) {
        console.error('Error creating log:', error);
    }
}
