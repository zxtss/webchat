
var app=require('http').createServer()

var io=require('socket.io')(app)

var PORT=3000

app.listen(PORT)

console.log('Server running at '+PORT);

