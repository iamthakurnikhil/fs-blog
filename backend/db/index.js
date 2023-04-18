const mongoose = require("mongoose");
require('dotenv').config();

async function connectToDB() {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('Connected to database');
    } catch (error) {
      console.error('Database connection error:', error.message);
    }
  }
  connectToDB();


// OR
// mongoose.connect(process.env.MONGO_URI)
// .then(()=>console.log("db connnected"))
// .catch((err)=> console.log("db connection failed :", err.message || err));
