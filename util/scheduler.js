const db = require('../model/database');
const {createLog}=require('../controller/logController')

const INTERVAL = 5; 

const scheduleLogs = async () => {
    try {
        const processes = await db.process.findAll();

        processes.forEach(process => {
            const creationTime = new Date(process.createdAt); 
                const currentTime = new Date();
                const elapsedTime = Math.floor((currentTime - creationTime) / 1000);
                if (elapsedTime % INTERVAL === 0) {
                    createLog(process.id);
                }
            
        });
    } catch (error) {
        console.error('Error scheduling logs:', error);
    }
};

module.exports = scheduleLogs;
