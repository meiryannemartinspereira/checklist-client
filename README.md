# 📚 Código Kids Checklist - APP

## 📌 About the Project

This project is the **web client responsible for managing and visualizing checklists for Código Kids school**, located in Cachoeirinha/RS.

The application aims to provide a modern and intuitive interface for monitoring students' checklist records, consuming data provided by a backend API.

The system will allow users to monitor information related to student attendance, completed activities, class schedules, and student observations through an administrative dashboard.

---

## 🎯 Objective

The objective of this client is to centralize the visualization and management of the school's checklist data, providing a simple experience for monitoring students' daily routines.

The application will be responsible for:

- Retrieving student data through the Checklist API;
- Displaying attendance and completed activity information;
- Providing dashboards with indicators and metrics;
- Facilitating the monitoring of student progress;
- Providing a user-friendly interface for school management.

---

## 🏗️ Architecture

This project represents the **Frontend Client** layer of the solution.

The application is developed using **React.js**, being responsible for the system interface and communication with the backend API developed with **Spring Boot**.

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

## 🛠️ Technologies

- **React.js**
- **JavaScript / JSX**
- **Vite**
- **React Router DOM**
- **CSS**
- **REST API**
- **Spring Boot** — Backend

---

## 🚀 How to Run the Project

### 📋 Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js**
- **npm**

To check the installed versions:

```bash
node --version
npm --version
```

It is recommended to use an LTS version of Node.js.

---

### 📥 1. Clone the Repository

Clone the project using Git:

```bash
git clone <REPOSITORY_URL>
```

Navigate to the project directory:

```bash
cd checklist-client
```

---

### 📦 2. Install Dependencies

Run:

```bash
npm install
```

This command will install all dependencies defined in the `package.json`.

---

### ▶️ 3. Run the Project

To start the development environment:

```bash
npm run dev
```

After initialization, Vite will make the application available at an address similar to:

```text
http://localhost:5173
```

Access the address provided by the terminal through your browser.


### Build

Generates the production version of the application:

```bash
npm run build
```

### Preview

Runs the production version locally:

```bash
npm run preview
```
---

## 👩‍💻 Development

This project was developed as part of the **Código Kids* checklist management solution, located in **Cachoeirinha/RS**.
