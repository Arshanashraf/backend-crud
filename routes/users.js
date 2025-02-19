const express = require('express');
const router = express.Router();

router.get('/user', (req,res) => {
    res.send('this is user route')
})
router.get('/101',(req,res) => {
    res.send('this is user 101')
})
router.get('/102',(req,res)=> {
    res.send('this is user 102')
})
module.exports = router;