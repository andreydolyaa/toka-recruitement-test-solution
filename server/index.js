const express = require('express');
const app = express();
const path = require('path')
const server = require('http').createServer(app);
const WebSocket = require('ws');
const userData = require('./data/data.json');


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
}
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const wss = new WebSocket.Server({ server: server });

wss.on('connection', function connection(ws) {
    console.log('client connected (server msg)...');
    ws.on('message', function incoming(message) {
        if (message === 'start') {
            ws.send(JSON.stringify(userData));
        }
    })
});


const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log(`Server is running on port 3000`);
});