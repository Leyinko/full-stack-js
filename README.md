# Full Stack JS

![Frontend](https://res.cloudinary.com/drft9abh4/image/upload/v1731142187/Frontend_j1p8m7.png)

## Table of Contents
1. Introduction
2. Features
3. Getting Started
   - Prerequisites
   - Installation
4. Usage
   - Running the Application
   - Frontend
   - Backend
5. Testing Backend
6. Customization

# Full Stack JS Documentation

## 1. Introduction

Full Stack JS is a quick, full-stack JavaScript application template using Vite and Express. It's designed for learning, testing, and experimentation purposes, providing a pre-configured folder structure for easy setup. This template allows developers to quickly set up a Single Page Application (SPA) with both frontend and backend capabilities served from the same application.

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

- Node.js (version X.X.X or higher)
- npm (version X.X.X or higher)

### Installation

1. Clone the repository
```
 git clone https://github.com/Leyinko/full-stack-js
 ```

 
2. Navigate to the project directory
```
cd full-stack-js
```

3. Install dependencies
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

### Frontend

The frontend is a Single Page Application built with Vanilla JavaScript. It uses a custom router to handle navigation without page reloads.

- `src/client/components/`: Directory for frontend components
- `src/client/pages`: Folder to handle links and pages
- `src/client/router`: Folder to handle the SPA router
- `src/client/utils`: Utilities folder containing the customized Fetch function and the DOM Fragment Document function
- `src/client/main.js`: Entry point for the frontend application

### Backend

The backend is powered by Express and is integrated with the frontend using the vite-express library.

- `src/server/api`: Simple directory for controller and router
- `src/server/middlewares`: Middlewares folder
- `src/server/main.js`: Main server file

## 5. Testing Backend

The application includes a Ping/Pong feature for testing the communication between frontend and backend.

![Backend](https://res.cloudinary.com/drft9abh4/image/upload/v1731142183/Backend_q0bwxc.png)

To test:
1. Navigate to the Backend section
2. Enter the "Ping" message
3. The backend will respond with a "Pong" output

## 6. Customization

You can easily extend the application by:
- Adding new frontend features
- Creating new API routes
- Modifying the router to add new pages. A commented Example route is ready to use!


