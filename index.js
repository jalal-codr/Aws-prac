const express = require('express');
const app = express();
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Hello world again')
})



const port = 443;
app.listen(port,()=>console.log(`server running on ${port}`));
