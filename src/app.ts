import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
// import httpStatus from 'http-status';
import globalErrorHandler from './middleware/globalErrorHandler';
// import router from './routes';


const app: Application = express();
app.use(cors());
// app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send({
        Message: "Pet Adoption Platform.."
    })
});

// app.use('/', router);

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.json({
        success: false,
        message: "API NOT FOUND!",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found!"
        }
    })
})

export default app;