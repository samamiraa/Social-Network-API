// imports dependancies
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// initializes express and sets port
const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// to use our defined routes
app.use(routes);

// starts server 
db.once('open', () => {
    app.listen(port, () => {
        console.log(`API server running on port ${port}`);
    })
})
