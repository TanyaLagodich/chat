const express = require('express');
const router = express.Router();

const UserController = require('../controllers/User');
const UserCntrl = new UserController();


router.post('/register', UserCntrl.register);
router.post('/login', UserCntrl.login);
router.post('/logout', UserCntrl.logout);

module.exports = router;
