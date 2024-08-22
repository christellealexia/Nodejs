const express = require('express')

const app = express()

app.listen(3000)

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about.html', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
});

app.use((req,res)=> {
res.status(404).sendFile('./views/404page.html', {root:__dirname})
})


