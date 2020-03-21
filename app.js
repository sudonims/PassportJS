const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const passport=require('passport');
const path=require('path');
// const session=require('express-sessions');
const app=express();

const userRoute=require('./routes/users');

const User = require('./models/user');
const monogURL="mongodb://127.0.0.1:27017/api";

mongoose.connect(monogURL,{useNewUrlParser:true}).then(()=>{
    console.log('MongoDB Connected');
}).catch(err=>console.log(`Error: ${err}`));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/users',userRoute);


app.get('/',(req,res)=>{
    res.render('index',{});
});
app.get('/register',(req,res)=>{
    res.render('register',{});
});

app.post('/register',(req,res)=>{
    var newUser = new User({
        email:req.body.email,
        password:req.body.password
    });
    newUser.save().then(usr=>{
        res.send("success");
    }).catch(err=>console.log(err));
});
// app.use(
//     session({
//       secret: 'secret',
//       resave: true,
//       saveUninitialized: true
//     })
// );

app.use(passport.initialize());
app.use(passport.session());

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});