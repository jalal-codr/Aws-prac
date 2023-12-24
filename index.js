const express = require('express');
const app = express();
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('hello jalal')
})



const port = 443;
app.listen(port,()=>console.log(`server running on ${port}`));
