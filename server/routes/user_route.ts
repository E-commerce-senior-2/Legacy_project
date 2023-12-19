import { Router } from 'express';
import * as UserController from '../controllers/user_controller';

const router = Router();


router.post('/create', UserController.createUser);

export default router