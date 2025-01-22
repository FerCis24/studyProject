const { Router } = require("express");
const authControllers = require("../controllers/auth.controllers.js");

const router = Router();

router.post("/", authControllers.userLogin);

module.exports = router;
