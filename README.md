# 🚀 Aula 02: Criando o Primeiro Servidor Web com Express

Este repositório contém o código desenvolvido durante a aula 02 de Back-End que eu tive na faculdade Unicarioca. O objetivo principal foi entender como funciona a criação de um servidor HTTP local, a definição de rotas e o envio de respostas (textos, HTML e links) para o navegador utilizando o ecossistema Node.js.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript no lado do servidor.
* **Express**: Framework minimalista e flexível para Node.js que facilita o gerenciamento de rotas e servidores.

---

## 📌 Funcionalidades e Rotas Criadas

O servidor foi configurado para rodar na porta `3000` e possui as seguintes rotas:

| Rota | Descrição | Tipo de Resposta |
| :--- | :--- | :--- |
| `/` | **Home/Sumário**: Rota principal que orienta o usuário sobre os outros caminhos disponíveis. | Texto plano |
| `/sobre` | **Sobre**: Apresentação do criador do servidor (Antônio Carlos). | Tag HTML (`<h1>`) |
| `/contato` | **Contato**: Exibe as informações de contato estudantil. | Texto plano |
| `/link` | **Links**: Exibe um texto com um link hipertexto direcionando para o Google. | HTML (`<a>`) |

---
