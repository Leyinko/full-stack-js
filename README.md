# Vite Full JS

![Frontend](https://res.cloudinary.com/drft9abh4/image/upload/v1731225987/Frontend_dkuq1u.png)

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Usage](#usage)
   - [Running the Application](#running-the-application)
   - [Project Structure](#project-structure)
   - [Testing Backend](#testing-backend)
5. [Customization](#customization)

# Vite Full JS Documentation

## 1. Introduction

Vite Full JS is a quick, full-stack JavaScript application template using Vite and Express. It's designed for learning, testing, and experimentation purposes, providing a pre-configured folder structure for easy setup. This template allows developers to quickly set up a Single Page Application (SPA) with both frontend and backend capabilities served from the same application.

## 2. Features

- Single Page Application (SPA) architecture
- Frontend built with Vanilla JavaScript and Vite
- Backend powered by Express
- Custom router for SPA functionality
- Integrated frontend and backend servers
- Testing capabilities with a Ping/Pong request feature
- Pre-configured folder structure for quick start

## 3. Getting Started

### Prerequisites

Note: Make sure you have Node.js and NPM installed on your system before running these commands.

### Installation

To get started, follow these steps:

1. Open your terminal.

2. Run the following command:

```
npm create vite-full-js@latest [project-name]
```

Replace [project-name] with your desired project name. If you don't specify a name, a default name will be used.

3. Once the project is created, navigate to the project directory:

```
cd [project-name]
```

4.Install the dependencies:

```
npm install
```

## 4. Usage

### Running the Application

To start the application

```
npm run dev
```

This will start both the frontend and backend servers.

### Project Structure

```
├── src
│   ├── client
│   │   ├── components
│   │   ├── pages
│   │   ├── router
│   │   ├── utils
│   │   └── main.js
│   └── server
│       ├── api
│       │   ├── controllers
│       │   └── routes
│       ├── middlewares
│       └── main.js
```

### Testing Backend

The application includes a Ping/Pong feature for testing the communication between frontend and backend.

![Backend](https://res.cloudinary.com/drft9abh4/image/upload/v1731142183/Backend_q0bwxc.png)

1. Navigate to the Backend section
2. Enter the "Ping" message
3. The backend will respond with a "Pong" output

## 5. Customization

You can easily extend the application by:

- Adding new frontend features
- Creating new API routes
- Modifying the router to add new pages. A commented Example route is ready to use!
