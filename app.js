const express = require('express')
const app = express()
var http = require('http').Server(app)
const port = 3000

var path=require('path');

var io = require('socket.io')(http);

app.get('/', (req, res) => {

  var options ={
    root:path.join(__dirname)
}
var fileName = './index.html';
res.sendFile(fileName,options);
})

io.on('connection',function(socket){
    console.log('A user connect');

    
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})









