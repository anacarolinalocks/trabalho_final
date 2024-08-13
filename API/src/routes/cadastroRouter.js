const { Router } = require('express');
const router = Router();
const{storeUser} = require("../controller/userController")

router.post("/cadastro",storeUser) 

module.exports = router;