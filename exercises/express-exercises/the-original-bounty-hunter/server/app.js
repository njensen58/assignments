const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid/v1');

const bountyRoutes = require('./routes/bounties');

app.use(bodyParser.json());

app.use('/bounty', bountyRoutes);



app.listen(4000, () => {
    console.log('Server is running on port 4000');
})
