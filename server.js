const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.static('static'));
app.use(cors());

let port = process.env.PORT || 3420;
app.listen(port, () => console.log(` APP_PORT: ${port}`));