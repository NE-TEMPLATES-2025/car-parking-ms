import {Router} from 'express'
import asyncHandler from 'express-async-handler'
import parkingSlotController from '../controllers/slots.controller';
import { checkAdmin, checkAuth } from '../middlewares/auth.middleware';

const router= Router();





router.post("/create",checkAdmin,asyncHandler(parkingSlotController.createParkingSlot))
router.get("/all",checkAuth,asyncHandler(parkingSlotController.getAllParkingSlots))
router.get("/search",checkAuth,asyncHandler(parkingSlotController.searchSlots))
router.delete("/delete/:id",checkAdmin,asyncHandler(parkingSlotController.deleteParkingSlot))

export default router;