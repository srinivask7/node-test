const express = require('express');

var app =express();

app.use(express.static(__dirname + '/public'));



/* app.get('/index.html',(req, res)=>{
res.send('');
}); */

app.listen(3000);