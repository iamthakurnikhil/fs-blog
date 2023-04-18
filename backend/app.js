const express = require("express");
// require('express-async-errors');
require("./db");
require("dotenv").config();
const morgan = require("morgan");
const portRouter = require("./routers/post");

const app = express();

app.use(morgan('dev'));
app.use(express.json())
app.use("/api/post", portRouter);

// app.use((err, req,res,next)=>{
//     res.status(500).json({error:err.message});
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`port is listening on ${PORT}`);
})