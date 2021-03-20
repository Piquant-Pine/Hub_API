const express = require('express');
const app = express();

const port = 3001;
const router = require('./router/router.js');

app.use(express.json());

app.use('/API', router);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})
