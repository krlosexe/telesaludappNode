const path = require('path')
const express = require('express')
const app = express()
const SocketIO = require('socket.io')
const bodyParser = require('body-parser');



app.use(bodyParser.json({ limit: '50mb' })); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); // support encoded bodies

app.use(require('./api/api.js'));



// settings
app.set('port', process.env.PORT || 3000)
    // static files
app.use(express.static(path.join(__dirname, 'public')))

const server = app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})
const io = SocketIO.listen(server)


const sessionMap = {}

io.on('connect', (client) => {
    console.log("Se conecto", client.id)
    client.emit("askForUserId");
    client.on("userIdReceived", (userId) => {
        sessionMap[userId] = client.id
        console.log(sessionMap)
    })

    client.on("updateSyncToken", function(data) {
        console.log("#")
        console.log("#")
        console.log(data);
        console.log("#")
        console.log("#")
    });

    client.on("syncScreen", function(data) {
        console.log("#")
        console.log("#")
        console.log(data);
        console.log("#")
        console.log("#")
        const id_client = sessionMap[data.client_id]
        const image = `images/${data.valoration_id}/out.png?ramdom=${Math.random()}`
        console.log(id_client)
        console.log(image)
        io.to(id_client).emit("displayImage", { "uri": image });
    });
})