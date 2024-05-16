const db=require('../model/database');


// create process
exports.createProcess=async (req, res) => {
    try {
        const creation_time = new Date();
        const newProcess = await db.process.create({ creation_time });
        res.status(201).json(newProcess);
    } catch (error) {
        console.error('Error creating process:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


// get all process 
exports.getAllProcess=async (req, res) => {
    try {
        const processes = await db.process.findAll();
        res.status(201).json(processes);
    } catch (error) {
        console.error('Error fatching process:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


// get single process 
exports.getProcess=async (req, res) => {
    try {
        const process_id=req.query.process_id
        const logs = await db.log.findAll({where:{process_id:process_id}});
        res.status(201).json({Logs:logs.map(log => log.time_log)});
    } catch (error) {
        console.error('Error fatching process:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


// delete process 
exports.deleteProcess=async (req, res) => {
    try {
        const process_id=req.query.process_id
        const process = await db.process.destroy({where:{id:process_id}})
        res.status(201).json({msg:process_id +', The process has been successfully deleted'});
    } catch (error) {
        console.error('Error Deleteing process:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}