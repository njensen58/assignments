const express = require('express');

// Create our app
const app = express();

app.use(express.static('public'));
// Let's you add functionality to your express application

app.listen(3000, function(){
    console.log('Express server is up on port 3000');
});
