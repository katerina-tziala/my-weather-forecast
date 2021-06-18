const express = require('express');

const app = express();
const path = '/dist/my-weather-forecast';
app.use(express.static(`.${path}`));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: path });
});

app.listen(process.env.PORT || 8080);
