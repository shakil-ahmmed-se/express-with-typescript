import express, { NextFunction, Request, Response } from 'express';
import userRoute from './routes/users';

const PORT =3000;

const app = express();

// routes
app.use('/api', userRoute)


app.listen(PORT, ()=> {
    console.log(`Running on port ${PORT}`);
})