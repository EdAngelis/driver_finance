import express from 'express';
import daysController from '../controller/days_reports_controller.js';

const router = express.Router();

router.post('/register_day/:driverId', daysController.dayClosure);

export default router;