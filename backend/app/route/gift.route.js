module.exports = function(app) {

    const gifts = require('../controller/gift.controller');

    // Получение всех пользователей
    app.get('/api/gifts', gifts.findAll);
    
    // Добавление пользователя
    app.post('/api/addGift', gifts.create);

    // Получение пользователя по id
    app.get('/api/gift/:id', gifts.findById);

    // // Получение пользователя по username
    // app.get('/api/user/username/:username', users.findByUsername);

    // Обновление данных пользователя по id
    app.post('/api/updateGift/:id', gifts.update);

    // Удаление данных пользователя по id
    app.post('/api/deleteGift/:id', gifts.delete);
};
