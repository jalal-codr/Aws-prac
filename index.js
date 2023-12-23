const express = require('express');
const app = express();
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('hello world')
})



const port = 80;
app.listen(port,()=>console.log(`server running on ${port}`));
