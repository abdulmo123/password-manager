import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { config } from './config/config';

const app: Application = express();
import userRouter from './user';

// app.use(cors({
//     origin: '*',
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type']
// }));

app.use(express.json());
app.use('/api/v1/users', userRouter);

app.get('/', (req: Request, res: Response) => {
    console.log('connected!');
    res.send('Hello from the other side!');
});

app.listen(config.port, () => {
    console.log(`Listening on port : ${config.port}`)
});