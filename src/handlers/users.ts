import { NextFunction, Request, Response } from "express";

export async function getUsers(req: Request, res: Response, next: NextFunction){
    res.send('Hello users')
}


export async function getUser(req: Request, res: Response, next: NextFunction){
    const id = parseInt(req.params.id);
    res.send('Hello user')
}

export async function createUser(req: Request, res: Response, next: NextFunction){
    res.send('create user');
}