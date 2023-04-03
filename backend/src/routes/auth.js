const express = require(`express`);
const { signup, signin, requireSignIn } = require('../controller/auth.js')
const router = express.Router();



router.post('/signup', signup);

router.post('/signin', signin);

// router.post('/profile',requireSignIn,(req,res) =>{
//     res.status(200).json({
//         user : 'profile'
//     });
//     console.log('profile posted');
// });

module.exports = router;