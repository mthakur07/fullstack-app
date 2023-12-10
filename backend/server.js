import express from 'express';
const app = express();

app.get('/', (req, res) => { 
    res.send('server is ready');
})

app.get('jokes', (req, res)=>{
    const jokes =[
         
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(prot, ()=>{
    console.log(`server at http://${port}`);
})
