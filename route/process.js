const router=require('express').Router()
const {createProcess,getAllProcess,getProcess,deleteProcess}=require('../controller/processController')

router.post('/create-process',createProcess)
router.get('/get-all',getAllProcess)
router.get('/get-single',getProcess)
router.delete('/delete-process',deleteProcess)

module.exports=router