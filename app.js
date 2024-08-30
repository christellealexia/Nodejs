const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

//express app
 const app = express()
const dbURI = 'mongodb+srv://chichi:test1234@cluster0.odoac.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=>app.listen(3000))
.catch((error) => console.log(error))
app.set('view engine', 'ejs')



// middle ware and static
app.use(express.static('public'))
app

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.use((req,res)=> {
res.status(404).render('404')
})


