import {Router} from 'express'
import asyncHandler from 'express-async-handler'
import vehicleController from '../controllers/vehicle.controller';

const router= Router();




router.post("/new",asyncHandler(vehicleController.createVehicle))
router.get("/",asyncHandler(vehicleController.getVehicles))

export default router;