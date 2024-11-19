console.log('express-blog-routing')

//installo express
const express = require('express')
const app = express()
const port = 3000

// Importo file posts
const posts = require('./posts.js')

//Espongo cartella public
app.use(express.static('public'))

// Registro prima porta
app.get('/', (req, res) => {
    res.send('Express Blog Routing')
})

// Ascolto porta
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})

// Creo CRUD (che poi sposterò in altro file dentro cartella routers)

// INDEX
app.get('/posts', (req, res) => {
    res.send('Lista dei posts')
})

// SHOW
app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(`Dettagli del post con id ${id}`)
})

// STORE
app.post('')

