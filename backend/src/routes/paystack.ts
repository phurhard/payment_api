import express from 'express';
import paystackController from "../controllers/paystack";

const paystackRoute = express.Router();

// need to apply validation
paystackRoute.post('/initialize', paystackController.initializePayment);
paystackRoute.get('/verify', paystackController.verifyPayment);

export default paystackRoute;
