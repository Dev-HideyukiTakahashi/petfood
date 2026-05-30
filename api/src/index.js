require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/main.routes');

require('./database');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(router);

app.listen(app.get('port'), () => {
  console.log('Server is running at port 3000');
});
