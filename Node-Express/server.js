const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
var multer = require('multer');
var upload = multer();

//Port Definitions
const PORT = process.env.PORT || 3500;

//Custom middleware logger
app.use(logger);

//Cross Origin Resource Sharing
app.use(cors(corsOptions));

//this lets us get json data
app.use(express.json());

//this lets us get form data that is inputed
app.use(express.urlencoded({extended: false}));

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

//serve static files, such as images
app.use('/', express.static(path.join(__dirname, '/public')));

// routes
app.use('/', require('./routes/root'));
app.use('/cats', require('./routes/api/cats'));

app.post('/', (req, res) => {
    res.send(req.body);
});

//app.post('/api/cats', function (req, res) {
//    console.log(req.body.breed);
//    console.log(req.body.name);
    //res.send(req.body.name);
    //res.send(req.body.breed);
//});

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

//app.get('^/$|/index(.html)?', (req, res) => {
//    res.sendFile(path.join(__dirname, 'views', 'index.html'));
//});

//app.get('/new-page(.html)?', (req, res) => {
//    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
//});

//app.get('/old-page(.html)?', (req, res) => {
//    res.redirect(301, '/new-page.html');  //302 by default
//});

//app.get('/*', (req, res) => {
//    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
//});
