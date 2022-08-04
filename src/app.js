const express = require('express');
const app = express();
const router = require('./api/routes');

const PORT = process.env.PORT || 5000;

app.use(router);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
