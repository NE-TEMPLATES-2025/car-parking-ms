import {Router} from 'express'
import asyncHandler from 'express-async-handler'
import adminController from '../controllers/admin.controller';

import { checkAdmin, checkAuth } from '../middlewares/auth.middleware';
const router= Router();



router.use(checkAuth)

router.post("/create",asyncHandler(adminController.signup))
router.get("/users/all",asyncHandler(adminController.getUsers))

export default router;