var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var db = require('./app/config/db.config.js'); // подключение настроек базы данных

db.sequelize.sync({force: false}); //false - данные не будут теряться

app.listen(3000);

var user = require('./app/route/user.route.js');
user(app);

var category = require('./app/route/category.route.js');
category(app);

var gift = require('./app/route/gift.route.js');
gift(app);