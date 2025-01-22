const { Router } = require("express");
const { autentification } = require("../middleware/userValidation.js");
const cartControllers = require("../controllers/Cart.controllers.js");

const router = Router();

//RUTA PARA FINALIZAR UNA COMPRA
router.post("/checkout", autentification, cartControllers.checkout);
