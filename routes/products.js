const express = require('express')
const router = express.Router();

router.get('/product',(req,res)=>{
    res.send('this is product route')
})
router.get('/101',(req,res)=>{
    res.send('this is product 101 rroute')
})
module.exports=router;