// Importando as dependências necessárias
import express from 'express';
import cors from 'cors';

const app = express();

// Configurando o middleware para lidar com JSON e CORS
app.use(express.json());
app.use(cors());

const credentials = {
    email: 'veloce@email.com',
    senha: '123veloce'
}

// Rota de teste para verificar se o servidor está funcionando
app.get('/', (req, res) => {
    res.send("Olá, mundo");
})

// Rota para lidar com o login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ Message: "Requisição inválida." });
    }

    if (email != credentials.email || senha != credentials.senha) {
        return res.status(401).json({ Message: "Usuário ou senha incorreta." });
    }

    return res.status(200).json({ Message: "Ok!" });

})

app.listen(3000, () => {
    console.log("Server rodando porta 3000");
})




