const { Router } = require('express');
const router = Router();

const { storeTask } = require('../controller/dbController');

router.post('/store/book', storeTask);

module.exports = router;