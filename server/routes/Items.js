const {Router} = require('express');
const router = Router();
const multer = require('multer');
const mongoose = require('mongoose');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');
const jwt = require('jsonwebtoken');
const Item = require('../models/Item');

const secret = 'asdfe45we45w345wegw345werjktjwertkj';

router.post('/client/post', uploadMiddleware.single('file'), async (req,res) => {
    const {token} = req.cookies;
    if(!token){
      res.status(400).json("please login");
    }
    if(token){
      const {originalname,path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path+'.'+ext;
    fs.renameSync(path, newPath);

    
      jwt.verify(token, secret, {}, async (err,info) => {
        if (err) throw err;
        const {useremail,itemname,catagory,description,lof} = req.body;
        const itemDoc = await Item.create({
          useremail,
          itemname,
          catagory,
          description,
          lof,
          cover:newPath,
          by:info.id
        });
        res.json(itemDoc);
      });
    }
    
  
  });

  router.get('/client/post', async (req,res) => {
    res.json(
      await Item.find()
        .populate('by', ['username'])
        .sort({createdAt: -1})
    );
  });

  router.get('/client/post/:id', async (req, res) => {
    const {id} = req.params;
    const itemDoc = await Item.findById(id).populate('by', ['username']);
    res.json(itemDoc);
  })

  router.put('/client/post',uploadMiddleware.single('file'), async (req,res) => {
    let newPath = null;
    if (req.file) {
      const {originalname,path} = req.file;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];
      newPath = path+'.'+ext;
      fs.renameSync(path, newPath);
    }
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err,info) => {
      if (err) throw err;
      const {useremail,
        itemname,
        catagory,
        description,
        lof,
        id,} = req.body;
        console.log(description);
      const itemDoc = await Item.findById(id);
      const isBy = JSON.stringify(itemDoc.by) === JSON.stringify(info.id);
      if (!isBy) {
        return res.status(400).json('you are not the author');
      }
      console.log("yaho")
      console.log(description)
      const updateData = {
        useremail,
        itemname,
        catagory,
        description,
        lof,
        cover: newPath ? newPath : itemDoc.cover,
      };
      itemDoc.set(updateData);
      await itemDoc.save();
      console.log("yaya")
      console.log(itemDoc)
      res.json(itemDoc);
    });
  
  });
  
  router.delete('/client/delete/:id', async (req,res)=>{
    const {id} = req.params;
    console.log(id);
    const delimg = Item.findById(id);
    const delitem = await Item.findByIdAndDelete(id)
    res.json("id deleted");
  });

    router.post('/client/search', async (req,res)=>{
      const {search,catagory} = req.body;
      console.log(search);
      try{
        let query = {};
        if (search) {
          query.itemname = { $regex: new RegExp(search, 'i') };
        }
        if (catagory) {
          query.catagory = catagory;
        }
        const items = await Item.find(query);
        if (items.length === 0) {
          return res.status(404).json({ message: 'No items found for the given search term.' });
        }
        res.status(200).json( items ); 
      }
      catch(error){
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    })






module.exports = router;