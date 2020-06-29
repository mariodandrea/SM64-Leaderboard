const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.set({
    'Content-Type': 'text/html',
    charset: 'UTF-8',
  });
  return res.status(200).send('Hello World');
});

app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`));
