module.exports = function(app) {

    const users = require('../controller/user.controller');

    // Получение всех пользователей
    app.get('/api/users', users.findAll);
    
    // Добавление пользователя
    app.post('/api/addUser', users.create);

    // Получение пользователя по id
    app.get('/api/user/:id', users.findById);

    // Получение пользователя по username
    app.get('/api/user/username/:username', users.findByUsername);

    // Обновление данных пользователя по id
    app.post('/api/updateUser/:id', users.update);

    // Удаление данных пользователя по id
    app.post('/api/deleteUser/:id', users.delete);
};

