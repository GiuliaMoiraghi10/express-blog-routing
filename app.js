console.log('express-blog-routing')

//installo express
const express = require('express')
const app = express()
const port = 3000

// Importo file posts
const posts = require('./posts.js')

// Importo file router
const postsRouter = require('./routers/posts.js')

//Espongo cartella public
app.use(express.static('public'))
app.use(express.static('router'))

// Registro prima porta
app.get('/', (req, res) => {
    res.send('Express Blog Routing')
})

// Creo CRUD (che poi sposterò in altro file dentro cartella routers)
// Copiato e incollato CRUD in file posts.js dentro a cartella router

// Registro rotte collegate a router
app.use('/posts', postsRouter)

// Ascolto porta
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})