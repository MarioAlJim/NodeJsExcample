const express = require('express');
const app = express();
/*
app.get('/', (req, res)=> {res.send('Home page');})

app.get('/clientes', (req, res)=> {res.send('Acciones de clientes');})
*/

app.get('/', (req, res)=> {res.sendFile(__dirname+'/public/index.html');})
app.get('/clients', (req, res)=> {res.sendFile(__dirname+'/public//clients/index.html');})
app.get('*', (req, res)=> {
    //res.send('404 not found')
    res.sendFile(__dirname+'/public/404.html');})

app.use(express.static('public'));

app.listen(8081)