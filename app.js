const express = require('express');
const app = express();
const port = process.env.PORT || 1200;
require('./config/postgres');
app.get('/', (req,res)=>{
    res.status(200).json({msg:"Done"});
})
app.listen(port, (err)=>{
    if(err){console.log(`Server Error ${err}`)}
    console.log(`Server is running on port ${port}`);
})