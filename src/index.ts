import bodyParser from "body-parser";
import express, { Application, ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { NotFoundError, BadRequestError } from "./utils/ApiError";
import { ErrorHandler } from './utils/middlewares/ErrorHandler';


const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
	throw new BadRequestError('User not found');
	res.status(200).json({
		success: true,
		message: 'Hello world!',
	});
});

app.use((req: Request) => {
	throw new NotFoundError(req.path);
});

// app.use(ErrorHandler.handle);

app.listen(3000, () => {
	console.log('Server running on port 3000...');
});
