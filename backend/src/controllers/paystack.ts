import { Request, Response } from "express";
import paystackApi, { InitializePaymentArgs } from "../api/paystackApi";
import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "../utils/asyncWrapper";
import { BadRequestError } from "../utils/ApiError";
import { Donation } from "../models/Donation";


class PaystackController {
    initializePayment = asyncWrapper(async (req: Request, res: Response) => {
        const { amount, email, callbackUrl, name } = req.body;

        const paymentDetails: InitializePaymentArgs = {
            amount,
            email,
            callback_url: callbackUrl,
            metadata: {
                amount,
                email,
                name,
            },
        };

        const data = await paystackApi.initializePayment(paymentDetails);

        return res.status(StatusCodes.OK).send({
            message: 'Payment initialized successfully',
            data
        });
    });

    verifyPayment = asyncWrapper(async (req: Request, res: Response) => {
        if(!req.query.reference){
            throw new BadRequestError('Missing transaction reference');
        }

        const {
            data: {
            metadata: {
                email, amount, name
            },
            reference: paymentReference,
            status: transactionStatus
        },
    } = await paystackApi.verifyPayment(req.query.reference as string)

        if(transactionStatus !== 'success') {
            throw new BadRequestError(`Transaction: ${transactionStatus}`);
        }

        const [donation] = await Donation.findOrCreate({
            where: { paymentReference },
            defaults: { amount, email, name, paymentReference },
        });

        // Provide service for user here
        return res.status(StatusCodes.OK).send({
            message: 'Payment verified',
            data: donation,
        });
    });
}

const paystackController = new PaystackController();

export default paystackController;
