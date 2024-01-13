const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const db = require('./connections')
const response = require('./response')

app.use(bodyParser.json())

app.get('/code', (req, res) => {
    const sql = `SELECT * FROM member_biasa WHERE MN = ${req.query.MN}`
    db.query(sql, (error, result) => {
        response(200, result, "find name", res)
    })
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM member_vip"

    db.query(sql, (error, result) => {
        response(200, result, "get all data from member_vip", res)
    })
})

app.put('/update', (req, res) => {
    console.log({requestUpdate: req.body})
    res.send('Update Berhasil')
})
app.post('/login', (req, res) => {
    console.log({ requestFromOutside: req.body })
    res.send('Login Berhasil')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})