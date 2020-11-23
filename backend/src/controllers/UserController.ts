import { Request, Response } from 'express'
import EmailService from '../services/EmailService';

const users = [
    { name: 'rafael', email: 'rafaelcostamoura@gmail.com'},
];

export default {
    async index(req: Request,res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendmail(
            { to: { nome: 'Rafael Moura', email: 'rafaelcostamoura@gmail.com' }, message: { subject: 'Bem Vindo ao Sistema', body: 'Seja Bem vindo' } }        );
        return res.send();
    }
};