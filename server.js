import express from 'express';

const app = express();

app.get('/',(req, res)=>{
    res.send("meow v7");
})

app.listen(3000);
