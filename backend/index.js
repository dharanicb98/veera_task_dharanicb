const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/')

const app = express();

const PORT = 5000;

app.use(cors());

app.use(bodyParser.json());

//my-sql connection
require('./db')

routes.setupRoutes(app)



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
