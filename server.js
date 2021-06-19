require('dotenv').config();
const process = require('process');
const express = require('express');
const app = express();
const cors = require('cors');
const path = require("path");
const APP_DIR = 'dist/app';

app.use(cors());
app.use(express.static(APP_DIR));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + `./${APP_DIR}/index.html`));
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT} :)`);
});
