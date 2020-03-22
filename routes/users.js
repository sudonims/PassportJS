const router = require('express').Router();
const passport = require('passport');
const User = require('../models/user');
const { forwardAuthenticated } = require('../config/auth');


router.get('/login',(req,res)=>{
    res.render('login',{ msg : '' });  
});

router.post('/login',(req,res,next)=>{
    passport.authenticate('local',{
        successRedirect : '/dashboard',
        failureRedirect : '/users/login',
        failureMessage : { msg:'Wrong Credentials' }
    })(req,res,next);
});



module.exports=router;