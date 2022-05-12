import express from 'express';
import timeController from '../controllers/time.controller.js'

const routeTime = express.Router();

routeTime.post("/",timeController.insertTime);
routeTime.get("/", timeController.getTimes);

routeTime.delete("/",(req, res)=>{
    res.send('Deletando Time');
});


export default routeTime;