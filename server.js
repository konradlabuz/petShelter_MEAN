const express = require('express');
const app = express();

require('./server/config/mongoose');

const bodyParser = require('body-parser')
app.use(bodyParser.json());

var path = require('path');
app.use(express.static(path.join(__dirname, './client/dist/client')));

require('./server/config/routes')(app);

app.listen(5000, () => {
    console.log("listening on port 5000");
})
