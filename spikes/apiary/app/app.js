
import express from 'express';
var app = express();

app.get('/basic', (req, res) => {
    res.send([{"status": "ok"}]);
});

app.listen(3000);
console.log('Listening on port 3000');
