const { Router } = require('express');
const userControllers = require("../controllers/user.controllers.js");


const router = Router();

router.get('/', userControllers.getAllUsers);
router.get('/:id', userControllers.getUserById);
router.post('/',userControllers.addUser );
router.put('/:id', userControllers.updateUser);
router.delete('/:id', userControllers.deleteUserById);

module.exports = router;