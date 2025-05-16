import {Router} from 'express'
import asyncHandler from 'express-async-handler'
import parkingSlotController from '../controllers/slots.controller';
import { checkAdmin,checkAuth } from '../middlewares/auth.middleware';

const router= Router();




router.post("/create",asyncHandler(parkingSlotController.createParkingSlot))
router.get("/all",asyncHandler(parkingSlotController.getAllParkingSlots))
router.delete("/delete/:id",asyncHandler(parkingSlotController.deleteParkingSlot))

export default router;