var db = require('../config/db.config.js');
var Gift = db.gift;
var globalFunctions = require('../config/global.functions.js');


// Получение всех категорий
exports.findAll = (req, res) => {
    Gift.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

// Добавление подарков
exports.create = (req, res) => {
    Gift.create({
        name: req.body.name,
        description: req.body.name,
        price: req.body.name,
        received: req.body.received,
        user_id: req.body.user_id
    }).then(object => {
        res.status(200).send(object);
    }).catch(err => {
        res.status(500).send(err);
    })
};

// Обновление данных подарка по id
exports.update = (req, res) => {
    Gift.update({
        name: req.body.name,
        user_id: req.body.user_id,
        description: req.body.description,
        price: req.body.price,
        received: req.body.received
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

// Удаление категории по id
exports.delete = (req, res) => {
    Gift.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        globalFunctions.sendResult(res, 'Запись удалена');
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};



// Получение данных категории по id
exports.findById = (req, res) => {
    Gift.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};