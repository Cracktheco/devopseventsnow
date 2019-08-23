const express = require('express')
const app = express()
const port = 3000
const controller = require('./controller/controller');
app.get('/', (req, res) => res.send(controller.events))

app.get('/newroute', (req, res) => res.send("hello new route"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
