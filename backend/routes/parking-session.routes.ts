import {Router} from 'express'
import asyncHandler from 'express-async-handler'
import parkingSessionController from '../controllers/parking-session.controller';
import { checkAdmin, checkAuth } from '../middlewares/auth.middleware';
const router= Router();


router.post("/book",checkAuth,asyncHandler(parkingSessionController.bookParkingSession))
router.get("/pending",checkAdmin,asyncHandler(parkingSessionController.getAllParkingSessions))
router.put("/approve/:id",checkAdmin,asyncHandler(parkingSessionController.approveParkingSession))


export default router;