import Mail from '../lib/Mail';

export default {
    async store(req, res) {
        const { name, email, password } = req.body;

        const user = {
            name,
            email,
            password
        };

        await Mail.sendMail({
            from: 'Queue <queue@queuetest.com.br>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${name}, bem vindo ao nosso sistema de filas :-)`

        });
        return res.json(user);
    }
};