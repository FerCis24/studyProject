const { Router } = require('express');
const userControllers = require("../controllers/user.controllers.js");


const router = Router();

router.get('/', userControllers.isAutenticated);

module.exports = router;