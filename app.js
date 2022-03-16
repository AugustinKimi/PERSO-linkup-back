const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world from docker')
})

app.listen(8080, () => {
    console.log('App listening on port 3000, go to http://localhost:3000')
})