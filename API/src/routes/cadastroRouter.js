const { Router } = require('express');
const router = Router();
const{storeUser, getUser} = require("../controller/userController")

router.post("/get/user", getUser)
router.post("/cadastro",storeUser) 

module.exports = router;
