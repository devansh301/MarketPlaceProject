const express = require(`express`);
const { signup } = require('../controllers/user.js')
const router = express.Router();



router.post('/signup', signup);

router.post('/signin', (req, res) => {});

module.exports = router;