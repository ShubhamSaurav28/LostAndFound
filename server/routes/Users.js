const {Router} = require('express');
const router = Router();
const User = require('../models/User');
const bcrypt=require('bcrypt')
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
// const verifytoken = require("../middlewares/verifyTokens");

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';


router.post('/api/register', async (req,res) => {
    const {username,password,useremail,phoneno,confirmpassword} = req.body;
    console.log(useremail);
    if (!(username && useremail && phoneno && password && confirmpassword)) {
      return res.status(400).json({ error: 'All fields are necessary.' });
    }
    const existingUser=await User.findOne({useremail});
    if(existingUser)
    {
        console.log("Already exists")
        return res.status(401).send("User With This Name Already Exists");
    }
    else if(password==confirmpassword){
      try{
      const userDoc = await User.create({
        username,
        useremail,
        phoneno,
        password:bcrypt.hashSync(password,salt),
      });
      res.status(200).json(userDoc);
    } catch(e) {
      console.log(e);
      res.status(400).json(e);
    }
    }
  });

  router.post('/api/login', async (req,res) => {
    const {useremail,password} = req.body;
    const userDoc = await User.findOne({useremail});
    console.log(userDoc);
    if (!userDoc) {
      res.status(400).json({ error: 'User not found' });
      return;
    }
    const passOk = bcrypt.compareSync(password,userDoc.password);
    const username = userDoc.username;
    const phoneno = userDoc.phoneno;
    console.log(password);
    console.log(userDoc.password);
    console.log(passOk);
    if (passOk) {
      // logged in
      jwt.sign({useremail,username,id:userDoc._id,phoneno}, secret, {}, (err,token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id:userDoc._id,
          useremail,
          username,
          phoneno,
        });
      });
    } else {
      res.status(400).json('wrong credentials 2');
    }
  });

  router.get('/api/profile', (req,res) => {
    const {token} = req.cookies;
    console.log('token');
    jwt.verify(token, secret, {}, (err,info) => {
      if (err) throw err;
      res.json(info);

    });
  });

  router.post('/api/logout', (req,res) => {
    res.cookie('token', '').json('ok');
  });




// router.get('/',verifytoken,(req, res)=>{
//     res.render('index');
// })

// router.get('/register', async (req, res)=>{
//     const token = req.cookies.token

//     if(!token){
//         return res.render('register');
//     }

//     res.redirect("/");
// })


// router.post('/register', async (req, res)=>{
//     const {username , useremail, password} = req.body;
//     if(!(username && useremail && password))
//     {
//         console.log("All Fields Are Necessary")
//         return res.status(400).send("All Fields are necessary");
//     }
//     const existingUser=await User.findOne({useremail});
//     if(existingUser)
//     {
//         console.log("Already exists")
//         return res.status(401).send("User With This Name Already Exists");
//     }
//     const salt = await bcrypt.genSalt(5)
//     const hashedPassword = await bcrypt.hashSync(password,salt)
//     const newUser = await User.create({username,useremail,password:hashedPassword});
//     return res.status(200).json(newUser);
// })


// router.post('/login', async (req, res)=>{
//     try{
//         const {useremail,password}=req.body;
//         if(!(useremail && password))
//         {
//             console.log("All Fields Are Necessary")
//             return res.status(400).send("All details are necessary")
//         }
//         const user = await User.findOne({useremail:req.body.useremail})
//         if(!user){
//             console.log("Not exists")
//             return res.status(404).json("User not found!")
//         }
//         const match = await bcrypt.compare(req.body.password,user.password)

//         if(!match){
//             return res.status(401).json("Wrong credentails!")
//         }
//         console.log("1")
//         const token = jwt.sign({_id:user._id,username:user.username,useremail:user.useremail},'shub',{expiresIn:"3d"})
//         user.password=undefined;
//         console.log('2')
//         res.cookie("token",token);
//         return res.status(200).json({
//             success:true,
//             token,
//             user
//         });
//     }
//     catch(err){
//         console.log("Password is incorrect");
//         res.status(500).json(err);
//     }
// })


// router.get('/login', async (req, res)=>{
//     const token = req.cookies.token

//     if(!token){
//         return res.render('login');
//     }

//     res.redirect("/");
    
// })
// router.get('/profile', async (req,res) => {
//     console.log('stt');
//     const {token} = req.cookies;
//     if (!token) {
//         return res.status(401).json({ error: 'JWT is missing' });
//       }
//     console.log('a')
//     jwt.verify(token,"shub", {}, (err,info) => {
//       if (err) throw err;
//       res.json(info);
//     });
//     console.log('rt')
//   });




// // logout route

// router.get('/logout',verifytoken,(req,res)=>{
//     res.clearCookie("token")
//     res.redirect('/login')
//     res.end()
// })


//abhi key liye baad me change karna hai
// router.post('/logout',(req,res)=>{
//     res.clearCookie("token")
//     res.redirect('/login')
//     res.end()
// })





module.exports = router;