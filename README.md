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
>Front-end : React with the use of React-Hooks.
>The application state management is done with the useContext and useReducer hooks. 

>Back-end : 


## Screenshots
![Landing](https://github.com/Panosmentz/Projects-Screenshots/blob/master/MERN-Expenses-screenshots/landing.PNG)
![Login](https://github.com/Panosmentz/Projects-Screenshots/blob/master/MERN-Expenses-screenshots/login.PNG)
![Register](https://github.com/Panosmentz/Projects-Screenshots/blob/master/MERN-Expenses-screenshots/register.PNG)
![MyTransactions](https://github.com/Panosmentz/Projects-Screenshots/blob/master/MERN-Expenses-screenshots/mytransactions.PNG)
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
