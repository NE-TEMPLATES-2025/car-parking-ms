import {Router} from 'express'
import asyncHandler from 'express-async-handler'
import parkingSessionController from '../controllers/parking-session.controller';
import { checkAdmin, checkAuth } from '../middlewares/auth.middleware';
const router= Router();


router.post("/book",checkAuth,asyncHandler(parkingSessionController.bookParkingSession))
router.get("/all",checkAuth,asyncHandler(parkingSessionController.getAllSessions))
router.get("/pending",checkAuth,asyncHandler(parkingSessionController.getAllPendingSessions))
router.put("/approve/:id",checkAuth,asyncHandler(parkingSessionController.approveParkingSession))

export default router;