require('dotenv').config();
const express = require("express");
const cors = require('cors')
const { getOneUser,getAllAnnounces ,getAllusers, saveAnnounceinDB , removeAnnounc , updateAnnounce, addUser}= require('../database/index.js')
const bcrypt=require("bcrypt")
const jwt = require('jsonwebtoken')
const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

console.log('PRIVATE_KEY:', process.env.PRIVATE_KEY)

// requests for login and sign up :

//1) Post request for signing up:
app.post("/api/auth/signup", (req,res) => {

  const {username,email,password}=req.body;
  bcrypt.hash(password, 10).then((hash)=>{
    addUser({
      username:username,
      email:email,
      password:hash,
    }).then(()=>{
      res.json("user registred")
    }).catch((err)=>{
      if(err){
        res.status(400).json({error:err})
      }
    })
  })
  })

  app.get('/api/auth/signin/:username', async(req,res) =>{
    try {
      const user = await getOneUser(req.params.username)
      res.json(user[0])
    } catch (error) {
      
    }
  })

  // handling login
  app.post("/api/auth/signin/:username", async (req, res) => {
    try {
      const user = await getOneUser(req.params.username);
      console.log(user[0][0].password)
      if (!user[0][0]) {
        return res.status(400).json({ error: "user not found" });
      }
      if (!req.body.password || !user[0][0].password) {
        return res.status(400).json({ error: "data and hash arguments required" });
      }
      
      const isMatch = await bcrypt.compare(req.body.password, user[0][0].password);
      
      if (!isMatch) {
        return res.status(400).json({ error: "password is incorrect" });
      }
      
      const token = jwt.sign(
        {
          id: user[0][0].id,
          username: user[0][0].username,
          email: user[0][0].email,
          role: user[0][0].role
        },process.env.PRIVATE_KEY,
        { expiresIn: '1h' }
      );
      
      res.status(200).json({
        message: "success",
        token: "Bearer " + token
      });
      
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  module.exports = app;
  
////////////////////////////////////////////////////////////////////////////
  app.get("/api/auth/signup", async (req, res) => {
    try {
     const allusers = await getAllusers()
     res.json(allusers[0])
    } catch (error) {
     res.status(500).send(error)
     console.log(error)
    }
   });

 app.get("/api/announce", async (req, res) => {
  try {
   const allAnnounces = await getAllAnnounces()
   res.json(allAnnounces[0])
  } catch (error) {
   res.status(500).send(error)
   console.log(error)
  }
 });

app.post("/api/announce/:id", async (req,res) => {
try {
  const addedAnnounce = await saveAnnounceinDB(req.body,req.params.id)
  res.status(201).json(addedAnnounce)
} catch (error) {
  res.status(500).send(error)
  console.log(error)
}
})

app.put('/api/announce/:id', async (req,res)=>{
  try {
    const updatedAnnounce = await updateAnnounce(req.body,req.params.id)
    res.json(updatedAnnounce)
  } catch (error) {
    res.status(500).send(error)
    console.log(error)
  }
  })



app.delete('/api/announce/:id', async (req,res)=>{
  try {
    const deletedAnnounce = await removeAnnounc(req.params.id)
    res.json(deletedAnnounce)
    console.log(deletedAnnounce)
  } catch (error) {
    res.status(500).send(error)
    console.log(error)
  }
})



app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
