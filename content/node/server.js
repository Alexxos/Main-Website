const express = require('express');

const app = express();



app.get('/', (req, res) => {
    res.send("Getting root");
})
app.get('/profile', (req, res) => {
    res.send("Getting profile");
})

app.use((req,res,next) => {
    
})




app.post('/profile', (req,res) =>{
    const user = {
        name: 'John',
        hobby: 'Skating'
    }

    res.send(user)
})
app.listen(3000)