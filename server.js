const express = require('express');
const app = express();

app.use(express.static('./dist/app'));

app.get('/*', function (req, res) {
  res.sendFile('./dist/app/index.html');
});

app.listen(process.env.PORT || 8080);
