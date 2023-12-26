import { Router } from 'express';
import * as UserController from '../controllers/user_controller';

const router = Router();


router.get('/get/:id', UserController.getUser);

export default router