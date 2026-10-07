import express from 'express';

const app = express();

app.get('/',(req, res)=>{
    res.send("meow v2");
})

app.listen(3000);
