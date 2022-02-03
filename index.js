const express = require('express');
const app = express();
const config = require('./config');
const path = require('path');
const axios = require('axios')
const port = config.port || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', async (req, res) => {
    res.render('index', {
        title: 'Home',
        config: config
    });
});

app.get('/tv/:ip', async (req, res) => {
    res.render('tv', {
        title: 'TV',
        ip: req.params.ip,
    });
})
app.get('/tv/:ip/post', async (req, res) => {
    var ip = req.params.ip;
    var command = req.query.command;
    axios.post(`${config.api}/tv/${ip}`, { "command": command })
    res.redirect(`/tv/${ip}`)
})

// Launch app on port
app.listen(port, () => console.log('\x1b[31m%s\x1b[0m', '[SERVER]', '\x1b[32m[WEB]\x1b[0m', `Connected @ localhost:${port}`));