import express from 'express';

const app = express();

app.get('/',(req, res)=>{
    res.send("meow v3");
})

app.listen(3000);
