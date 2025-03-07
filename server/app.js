const express = require('express');
const app = express();

app.use(express.static('client/public'));
// Route to the home page
app.get('/', function (req, res) {
    res.sendFile('/index.html', {root: './client/views' })
})
app.listen(1337, () => console.log('Website listening on port 1337!'));
