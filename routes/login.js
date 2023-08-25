const express = require('express');

const userController = require('../controllers/login');

const router = express.Router();

router.get('/get-user', userController.getUserData);

router.post('/details', userController.postUserData);

router.post('/delete/:id', userController.deleteUser);

module.exports = router

