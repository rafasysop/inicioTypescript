import { Request, Response } from 'express'
const users = [
    { name: 'rafael', email: 'rafaelcostamoura@gmail.com'},
];

export default {
    async index(req: Request,res: Response) {
        return res.json(users);
    }
};