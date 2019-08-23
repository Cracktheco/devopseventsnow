const express = require('express')
const app = express()
const port = 3000
const controller = require('./controller/controller');
app.get('/', (req, res) => res.send(controller.events))

app.get('/newroute', (req, res) => res.send("hello new route"));

app.get('/masterroute', (req, res) => res.send("hello master route! this has been great"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
