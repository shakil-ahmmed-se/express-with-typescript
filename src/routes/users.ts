import { NextFunction, Request, Response, Router } from "express";
import { getUser, getUsers } from "../handlers/users";


const router = Router();

router.get('/users', getUsers);

router.get('/users/:id', getUser);

export default router;