const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/assets/index.html')   
}) 

// app.get('/style.css', (req, res) => {
//     res.sendFile(__dirname + 'assets/css/index.css')   
// }) 

// app.use("/css",express.static(__dirname + 'assets/css/index.css'))

app.use("/css", express.static(__dirname + '/assets/css'));
app.use("/img", express.static(__dirname + '/assets/img'));
app.use("/docs", express.static(__dirname + '/assets/docs'));
app.use("/html", express.static(__dirname + '/assets/html'));
app.use("/js", express.static(__dirname + '/assets/js'));


app.listen(3000);
console.log('Server on port 3000')