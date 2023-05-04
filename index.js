const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json')

app.use(cors());

app.get('/', (req, res) =>{
    res.send('hello')
});

app.get('/chef', (req, res) =>{
    res.send(chef)
})

app.listen(port, () =>{
    console.log(`API ${port}`)
})


