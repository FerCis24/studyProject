const { Router } = require("express");
const ticketControllers = require("../controllers/ticket.controllers.js")

const router = Router();

router.post("/", ticketControllers.ticket)


module.exports = router