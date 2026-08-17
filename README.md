# 📚 Código Kids Checklist Dashboard - Client

## 📌 Sobre o projeto

Este projeto é o **client web responsável pelo gerenciamento e visualização dos checklists da escola Código Kids**, localizada em Cachoeirinha/RS.

A aplicação tem como objetivo fornecer uma interface moderna e intuitiva para acompanhamento dos registros de checklist dos alunos, consumindo dados disponibilizados por uma API backend.

O sistema permitirá o acompanhamento das informações relacionadas à presença, atividades realizadas, horários de aula e observações dos alunos através de um dashboard administrativo.

---

## 🎯 Objetivo

O objetivo deste client é centralizar a visualização e gerenciamento dos dados de checklist da escola, proporcionando uma experiência simples para acompanhamento da rotina dos alunos.

A aplicação será responsável por:

- Consultar dados de alunos através da API de checklist;
- Exibir informações de presença e atividades realizadas;
- Apresentar dashboards com indicadores e métricas;
- Facilitar o acompanhamento da evolução dos alunos;
- Disponibilizar uma interface amigável para gestão escolar.

---

## 🏗️ Arquitetura

Este projeto representa a camada **Frontend Client** da solução.

A aplicação é desenvolvida utilizando **React.js**, sendo responsável pela interface do sistema e pela comunicação com a API backend desenvolvida em **Spring Boot**.

```text
┌──────────────────────────────┐
│      Código Kids Client      │
│          React.js            │
└──────────────┬───────────────┘
               │
               │ HTTP / REST
               ▼
┌──────────────────────────────┐
│       Checklist API          │
│         Spring Boot          │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│          Database            │
└──────────────────────────────┘
```

---

## 🛠️ Tecnologias

- **React.js**
- **JavaScript / JSX**
- **Vite**
- **React Router DOM**
- **CSS**
- **REST API**
- **Spring Boot** — Backend

---

## 🚀 Como executar o projeto

### 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de possuir instalado:

- **Node.js**
- **npm**

Para verificar as versões instaladas:

```bash
node --version
npm --version
```

Recomenda-se utilizar uma versão **LTS** do Node.js.

---

### 📥 1. Clonar o repositório

Clone o projeto utilizando Git:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre no diretório do projeto:

```bash
cd checklist-client
```

---

### 📦 2. Instalar as dependências

Execute:

```bash
npm install
```

Esse comando irá instalar todas as dependências definidas no `package.json`.

---

### ▶️ 3. Executar o projeto

Para iniciar o ambiente de desenvolvimento:

```bash
npm run dev
```

Após a inicialização, o Vite disponibilizará a aplicação em um endereço semelhante a:

```text
http://localhost:5173
```

Acesse o endereço informado pelo terminal através do navegador.


### Build

Gera a versão de produção:

```bash
npm run build
```

### Preview

Executa localmente a versão de produção:

```bash
npm run preview
```
---

## 👩‍💻 Desenvolvimento

Projeto desenvolvido como parte da solução de gerenciamento de checklists da **Código Kids — Cachoeirinha/RS**.
