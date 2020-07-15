require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors')

//middleware

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

//controllers
const projectsController = require('./controllers/project');
app.use('/works', projectsController);

app.listen(port, () => {
    console.log(`your works page is listening at http://localhost:${port}`);
});