# Atividade Álvado Trabalho Prático – Ciclo 01
Atividade de Tela de Login para enviar requisição para o backend - Sistemas Distribuídos

## Integrantes do Grupo

* Gustavo Flores Ribeiro - 2420220
* Thiago dos Reis Martins - 2420430
* Otávio Baccin Molossi - 2420246
* Julio Cezar Monteiro de Santana - 2420003

## Tecnologias Utilizadas

* HTML
* CSS
* JavaScript
* Node.js
* Express.js

## Estrutura do Projeto

```
Atividade-Alvaro
│
├─ README.md
├─ frontend/
│   └─ index.html
│
└─ backend/
    └─ app.js
```

## Pré-requisitos

Node.js (recomendado versão 16 ou superior)

Para verificar se o Node está instalado, execute no terminal:
```
node -v
```

## Como Executar o Backend

1. Abra o terminal.
2. Navegue até a pasta do backend:

```
cd backend
```

3. Execute o servidor:

```
node app.js
```

4. O servidor será iniciado na porta 3000 e ficará aguardando requisições na rota:

## Como Executar o Frontend

1. Acesse a pasta `frontend`.
2. Abra o arquivo:

```
index.html
```

3. O navegador abrirá a tela de login do sistema.

## Funcionamento

A tela de login permite que o usuário informe **usuário** e **senha**.

Quando o botão **Entrar** é clicado:

1. O frontend envia uma requisição **POST /login** para o backend.
2. O backend valida as credenciais armazenadas em variáveis estáticas.
3. O servidor retorna uma resposta HTTP:

* **200 (OK)** → credenciais corretas
* **401 (Unauthorized)** → credenciais inválidas
* **400 (Bad Request)** → requisição incorreta

O frontend exibe a mensagem correspondente ao usuário.
