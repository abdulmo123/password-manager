import express, { Router, Request, Response } from 'express';
const userRouter = express.Router();
import bcrypt from 'bcrypt';
import { prisma } from './lib/prisma';

userRouter.post('/register', async (req: Request, res: Response) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await prisma.user.create({
        data: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
        }
    });

    // const newUser = await prisma.user.create({ data: { name, email } });
    res.status(201).json(newUser).send(newUser);
});

userRouter.get('/all', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.status(200).send(users);
});

export default userRouter;