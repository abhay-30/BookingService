const express = require('express')
const app = express()
const bodyParser = require("body-parser")
 
const apiRoutes = require('./routes/index')

const {PORT} = require("./config/serverConfig")

const db = require('./models/index');
const sequelize = require('sequelize');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.get('/api/v1/home',(req,res)=>{
//   return res.json({message:'hithing the booking service'})
// })

app.use('/bookingservice/api',apiRoutes);

app.listen(PORT, () => {
    // console.log(process.env)

  console.log(`Example app listening on port ${PORT}`)

  if(process.env.DB_SYNC){
    db.sequelize.sync({alter:true});
  }

})