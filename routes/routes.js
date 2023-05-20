const express = require('express');
const userCtrl = require('../controllers/userController');
//const jwttools = require("../jwttools");
const db = require("../db");

exports.router =(() => {
        
    const userRouter = express.Router();

        // Create a new user
    userRouter.route("/user").post(userCtrl.addUser);

    // Retrieve all users (protected route)
    userRouter.route("/users" ).get(userCtrl.getUsers);

    // Retrieve a specific user (protected route)
    userRouter.route("/user/:id").get(userCtrl.getUserId);

    // Update a user (protected route)
    userRouter.route("/user/:id").put(userCtrl.updateUserId);

    // Delete a user (protected route)
    userRouter.route("/user/:id").delete(userCtrl.deleteUser);

    // Login route
    userRouter.route("/login" ).post(userCtrl.loginUser);
    return userRouter
})()


