// 1. Importar a biblioteca
const express = require('express');

// 2. Iniciar a aplicação (Aqui é onde o 'app' é definido!)
const app = express();
const porta = 3000;

// --- DEFINIÇÃO DAS ROTAS ---

// Rota 1: Principal
app.get('/', (req, res) => {
    res.send('Olá este é o sumário, digite: /sobre, /contato ou /link no final do URL para outras rotas');
});

// Rota 2: Sobre
app.get('/sobre', (req, res) => {
    res.send('<h1>Este é um servidor de teste criado por Antônio Carlos</h1>');
});

// Rota 3: Contato (Ajustada a ordem req, res)
app.get('/contato', (req, res) => {
    res.send("Email: 2024101318.aluno@unicarioca.edu.br");
    
});
// Rota 4: links 
app.get('/link', (req, res) => {
  const link = '<a href="https://www.google.com">Clique aqui</a>';
  res.send(`Para pesquisar, ${link} para o Google.`);
});
// 5. Ligar o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}/sobre`); 
});
