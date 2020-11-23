interface IMailTo {
    nome: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

class EmailService {
    sendmail(to: IMailTo, message: IMailMessage) {
        console.log(`Email Enviado ${to.nome}: ${message.subject}`);
        
    }
}

export default EmailService;