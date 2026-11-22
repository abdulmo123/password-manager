import express, { Router, Request, Response } from 'express';
const userRouter = express.Router();
import bcrypt from 'bcrypt';
import { prisma } from './lib/prisma';

userRouter.post('/register', async (req: Request, res: Response) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    let newUser = null;
    try {
        newUser = await prisma.user.create({
            data: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hashedPassword,
            }
        });

        res.status(201).json(newUser).send(newUser);
    } catch (error) {
        // console.error('ERRROR [[[[[' , error, ']]]]]]]]]');
        // console.log(typeof(error));
        if (error.message.includes('Unique constraint failed on the constraint')) {
            console.error("Email already exists!")
            res.status(409).send('Email already exists!');
        } else {
            console.error("Unknown server error :(");
            res.status(500).send('Unknown server error :(');
        }


        
    }

    
});

userRouter.get('/all', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.status(200).send(users);
});

export default userRouter;