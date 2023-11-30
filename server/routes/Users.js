const {Router} = require('express');
const router = Router();
const User = require('../models/User');
const bcrypt=require('bcryptjs')
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
    if(phoneno.length!=10){
      return res.status(400).json("phone no. should be of 10 numbers")
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
        password: await bcrypt.hash(password,salt),
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
    const passOk = await bcrypt.compare(password,userDoc.password);
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



module.exports = router;