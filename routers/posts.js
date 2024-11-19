// CRUD

// Importo express
const express = require('express')
const router = express.Router

// INDEX
router.get('/', (req, res) => {
    res.send('Lista dei posts AAAAAA')
})

router.get('/', (req, res) => {
    res.send('Lista dei posts prova')
})

// SHOW
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(`Dettagli del post con id ${id}`)
})

// STORE
router.post('/', (req, res) => {
    res.send('Creazione nuovo post')
})

// UPDATE
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(`Modifico il post con id ${id}`)
})

// MODIFY
router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(`Modifico una parte del post con id ${id}`)
})

// DESTROY
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(`Cancello il post con id ${id}`)
})

// Esporto file
module.exports = router
