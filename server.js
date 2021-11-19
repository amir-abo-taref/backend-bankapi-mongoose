const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



app.use('/api/users', require('./routes/users.route'));
app.use('/api/admin',require('./routes/admin.route'));

mongoose.connect(`mongodb+srv://admin:am15970@cluster0.y3ixr.mongodb.net/bank-api-mongoose?retryWrites=true&w=majority`,{ useNewUrlParser: true });

app.listen(process.env.PORT||5001, () => {
    console.log('Server started on port 5001');
});

