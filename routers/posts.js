// CRUD

// Importo express
const express = require('express')
const router = express.Router

// INDEX
app.get('/posts', (req, res) => {
    res.send('Lista dei posts AAAAAA')
})

app.get('/prova', (req, res) => {
    res.send('Lista dei posts prova')
})

// SHOW
app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(`Dettagli del post con id ${id}`)
})

// STORE
app.post('/posts', (req, res) => {
    res.send('Creazione nuovo post')
})

// UPDATE
app.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(`Modifico il post con id ${id}`)
})

// MODIFY
app.patch('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(`Modifico una parte del post con id ${id}`)
})

// DESTROY
app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(`Cancello il post con id ${id}`)
})

// Esporto file
module.exports = router
