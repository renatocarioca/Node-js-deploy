const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('olá pessoal World')
})

app.listen(process.env.PORT || 3000)