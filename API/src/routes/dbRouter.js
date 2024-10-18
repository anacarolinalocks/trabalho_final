const { Router } = require('express');
const router = Router();

const { storeTask } = require('../controller/dbController');

router.post('/store/book', storeTask);

const {storeUser} = require('../controller/userController');

router.post('/store/user', storeUser);

module.exports = router;