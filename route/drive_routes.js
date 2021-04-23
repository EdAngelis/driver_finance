import express from 'express';

import userController from '../controller/driver_controller.js';

const router = express.Router();

router.post('/register_driver', userController.registerUser );



export default router;