var application_root = __dirname,
    express = require("express"),
    bodyParser = require('body-parser'),
    path = require("path"),
    http = require('http'),
    app = express();


// Config
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));





app.get('/', function (req, res) {
    res.sendfile('public/index.html');
});

app.get('/clients', function (req, res) {
    res.sendfile('public/db/clients.json');
});

// Launch server
http.createServer(app).listen(app.get('port'), function () {
    console.log("listening on port " + app.get('port'));
});