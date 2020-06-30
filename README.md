# MERN Expense-Tracker
> This is a full stack web application using the MERN stack. The app features technologies such as JWT, passportJS, React-Bootstrap and more. 

## Table of contents
* [Overview](#overview)
* [Screenshots](#screenshots)
* [Core-Technologies](#core-technologies)
* [Packages](#packages)
* [Setup](#setup)
* [TODO](#todo)
* [Status](#status)
* [Contact](#contact)

## Overview
>Front-end : React with the use of React-Hooks. The application state management is done with the useContext and useReducer hooks. Routing is facilitated by react-router.

>Back-end : Node.js and Express. Passport local handles the registration and then JWT and passport-jwt is responsible for the authentication and authorization.

>Database: The database lives on MongoDB Atlas. There are two models in the database. One of them is the User model that stores information about the user such as name, email and password. The other one is for the Transactions where the creator of each transaction is referenced. 

>The gist : A user registers with a name, email and password. If the email is taken, a message is displayed. On successful registration, the password is hashed with bcrypt and stored in the database. After this, the user gets redirected to the login page. On successful login, cookieParser sets a JWT access_token to the response as a Cookie. Every request to the server is then authenticated/authorized with passport-jwt. On logout the Cookie is deleted from the browser. To handle Auth and App state, useContext is used with the help of useReducer. All the components are wrapped around AuthContext and TransactionsContext providers. 

>Styling : CSS3, React-Bootstrap and Bootstrap v4.5 . Messages are done with the use of react-toastify and animations with Framer Motion.

## Screenshots
![Landing](https://github.com/Panosmentz/Projects-Screenshots/blob/master/MERN-Expenses-screenshots/landing.PNG)
![ResponsiveLogin](https://github.com/Panosmentz/Projects-Screenshots/blob/master/MERN-Expenses-screenshots/responsive-login.PNG)
![ResponsiveDashboard](https://github.com/Panosmentz/Projects-Screenshots/blob/master/MERN-Expenses-screenshots/responsive-dashboard.PNG)
![ResponsiveMyTransactions](https://github.com/Panosmentz/Projects-Screenshots/blob/master/MERN-Expenses-screenshots/responsive-mytransactions.PNG)

## Core-Technologies
* ReactJS
* Node.js
* Express
* MongoDB

## Packages
* JSONWebToken
* Passport, Passport-local, Passport-jwt
* Bcrypt
* Mongoose
* Cookie-parser
* React-Router-DOM
* Axios
* React-Bootstrap, Bootstrap v4.5.0
* React-toastify
* Framer-motion

## Setup
Clone this repository or download .zip and open the folder in your editor.
>Open a cmd and install the dependencies on the root folder 
`npm install`

>Navigate to the client folder and install the front-end dependencies.
`cd client - 
npm install`

>Lastly, you need to set the environment variables for the project.
>Create a new file `config.env`inside the `config` folder. Inside this file you need to set the `NODE_ENV = development` if you are in development mode. Set the `PORT = 5000`. You also need to set your `MONGO_URI` if you use MongoDB Atlas for your database.
>You also need to specify your `SECRET_OR_KEY` for PassportJS

>For `development mode` navigate to the root directory -> `npm run dev`. This starts the server and the client concurrently. 

## TODO
To-do list:
* Add categories and charts
* Add user roles
* Add admin page

## Status
Project is: _in progress_

## Contact
Created by [@Panagiotis Mentzelopoulos](https://determined-saha-b25d49.netlify.app/) - feel free to contact me!
