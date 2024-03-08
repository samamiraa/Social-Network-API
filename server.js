const express = require('express');
const db = require('./config/connection');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.once('open', () => {
    app.listen(port, () => {
        console.log(`API server running on port ${port}`);
    })
})
