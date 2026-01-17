import express from 'express';
import auth from './router/auth.js';

const app =express();
app.use(express.json());

app.use('/register',auth)


app.listen(3000,() => {
    console.log('server is running on port 3000');
})