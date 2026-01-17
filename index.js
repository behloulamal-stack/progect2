import express from 'express';
import auth from './router/auth.js';
import { verifyToken } from './middleware/verifyToken.js';

const app =express();
app.use(express.json());

app.use('/register',auth)

app.get("/user",verifyToken,(req ,res )=>{
    res.send("hello user");
})


app.listen(3000,() => {
    console.log('server is running on port 3000');
})