import bodyParser from 'body-parser';
import express, { Application, NextFunction, Request, Response } from "express";
import { NotFoundError } from "./utils/ApiError";
import { ErrorHandler } from './utils/middlewares/ErrorHandler';


const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req: Request, res: Response, next) => {
// 	try {
// 		// Simulate some logic that could throw an error
// 		if (true) { // Replace with actual condition
// 			throw new BadRequestError('User not found');
// 		}
// 		res.status(200).json({
// 			success: true,
// 			message: 'Hello world!',
// 		});
// 	} catch (error) {
// 		next(error);
// 	}
// });

app.get("/", (req: Request, res: Response) => {
	res.status(200).json({
		message: 'Hello World!',
	});
});

app.use((req: Request) => {
	throw new NotFoundError(req.path);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  ErrorHandler.handle(err, req, res, next);
});

app.listen(3000, () => {
	console.log('Server running on port 3000...');
});
