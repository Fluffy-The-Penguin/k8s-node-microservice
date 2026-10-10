import express from 'express';

const app = express();

app.get('/',(req, res)=>{
    res.send("meow v5");
})

app.listen(3000);
