import { NextFunction, Request, Response, Router } from "express";
import { createUser, getUser, getUsers } from "../handlers/users";


const router = Router();
// get all users
router.get('/users', getUsers);

// get a single user
router.get('/users/:id', getUser);

// create a new user
router.post('/users', createUser)

export default router;