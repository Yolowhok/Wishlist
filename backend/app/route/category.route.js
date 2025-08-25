module.exports = function(app) {

    const categorys = require('../controller/category.controller');

    // Получение всех пользователей
    app.get('/api/category', categorys.findAll);

    // Добавление категории
    app.post('/api/addCategory', categorys.create);

    // Получение категории по id
    app.get('/api/category/:id', categorys.findById);

    // // Получение категории по username
    // app.get('/api/category/username/:username', categorys.findByUsername);

    // Обновление данных категории по id
    app.post('/api/updateCategory/:id', categorys.update);

    // Удаление данных категории по id
    app.post('/api/deleteCategory/:id', categorys.delete);
};