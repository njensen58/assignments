const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const movieRoutes = require('./routes/movies')



app.use(express.json());

app.use((req, res, next) => require('./other')(req, res, next))

app.get('/', (req, res) => {
    return res.send(req.someStuff)
})

// app.use((req, res, next) => {
//     req.body.didIFart = {someoneFarted: true};
//     next();
// })





app.listen(4000, () => {
    console.log('Server is running on Port 4000');
})
