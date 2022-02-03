const express = require('express');
const app = express();
const config = require('./config');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', async (req, res) => {
    res.render('index', {
        title: 'Home',
        config: config
    });
});

// Launch app on port
app.listen(port, () => console.log('\x1b[31m%s\x1b[0m', '[SERVER]', '\x1b[32m[WEB]\x1b[0m', `Connected @ localhost:${port}`));