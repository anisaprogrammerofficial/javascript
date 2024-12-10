const express = require('express')
const path = require('path')
const app = express()

// Serve static files like CSS and JS from the 'public' folder
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
app.use('/pages', express.static(path.join(__dirname, 'public', 'pages')));

app.get('*', (req, res) => {
    if (req.url === '/') {
        res.sendFile(path.join(__dirname, 'public', 'pages', 'index.html'));
    } else if (req.url === '/about') {
        res.sendFile(path.join(__dirname,  'public', 'pages', 'about.html'));
    } else if (req.url === '/contact') {
        res.sendFile(path.join(__dirname,  'public', 'pages', 'contact.html'));
    } else {
        res.sendFile(path.join(__dirname,  'public', 'pages', '404.html'));
    }
});


const PORT = 4000;
const HOSTNAME = 'localhost'

app.listen(PORT, HOSTNAME, ()=>{
    console.log(`Server is listing on http://${HOSTNAME}:${PORT}`)
})

