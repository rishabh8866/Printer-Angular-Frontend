const express = require('express');
const app = express();
const port = 8100;
app.use('/', express.static(__dirname + '/view'));
app.use('**', express.static(__dirname + '/view'));
app.listen(port, (err) => {
    if(err) {
        console.log(err)
    }
    console.log('server running on ', port)

})
