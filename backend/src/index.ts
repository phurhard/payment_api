import cors from 'cors';
import bodyParser from 'body-parser';
import express, { Application, NextFunction, Request, Response } from "express";
import { NotFoundError } from "./utils/ApiError";
import { ErrorHandler } from './middlewares/ErrorHandler';
import config from './config/config';
import connection from './utils/database';
import { StatusCodes } from 'http-status-codes';
import router from './routes';


const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
	res.status(StatusCodes.OK).json({
		message: 'Hello World!',
	});
});

app.use('/api', router);

app.use((req: Request) => {
	throw new NotFoundError(req.path);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  ErrorHandler.handle(err, req, res, next);
});

const PORT = config.appPort || 3000;



const startServer = async () => {
	try{
		connection.sync();
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}...`);
		});
	} catch (error) {
		console.error(`Error occurred: ${error}`);
	}
}

startServer()
