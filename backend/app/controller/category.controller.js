var db = require('../config/db.config.js');
var Category = db.category;
var globalFunctions = require('../config/global.functions.js');


// Получение всех категорий
exports.findAll = (req, res) => {
    Category.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

// Добавление категорий
exports.create = (req, res) => {
    Category.create({
        name: req.body.name,
        category_id: req.body.category_id
    }).then(object => {
        res.status(200).send(object);
    }).catch(err => {
        res.status(500).send(err);
    })
};

// Обновление данных категории по id
exports.update = (req, res) => {
    Category.update({
        name: req.body.name,
        category_id: req.body.category_id
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
    Category.destroy({
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
    Category.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

// // Получение данных пользователя по username
// exports.findByUsername = (req, res) => {
//     Category.findAll({
//         where: {
//             username: req.params.username
//         }
//     }).then(objects => {
//         globalFunctions.sendResult(res, objects);
//     }).catch(err => {
//         globalFunctions.sendError(res, err);
//     })
// };
