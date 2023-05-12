require('dotenv').config()

const express = require('express')
const mongoose = require("mongoose")
const session = require ('express-session')

const app = express()
const PORT = process.env.PORT || 5000 ; 


// database
mongoose.connect(process.env.DB_URI, { useNewUrlParser : true });
const db = mongoose.connection;
db.on("error",(error) => {console.log(error)});
db.once("open",() =>{ console.log("Connected!") })

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// app.use((req,res,next) => {
//     res.locals.message = req.session.message;
//     delete req.session.message
//     next();
// })

// view engine
app.set("view engine","ejs")

//home route
app.use("/",require('./routes/routes.js'))

// app.get('/',(req,res)=> {
//     res.send("HELLO WORLD!")
// })

app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`));