module.exports = (sequelize, Sequelize) => {
    var Gift = sequelize.define(
        'gift', // определяем имя таблицы
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            description: {
                type: Sequelize.STRING(5000),
                allowNull: false
            },
            price: {
                type: Sequelize.INTEGER
            },
            received: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
    });

    // Определяем связи таблицы gift с другими таблицами
    Gift.associate = function(models) {
        // Определение связи многие-ко-многим с таблицей category. Это определение связи с одной стороны.
        // Связь также определена со второй стороны (со стороны таблицы category): в файле category.controller.js
        Gift.belongsToMany(models.category, {
            through: 'category_gift', //  указываем, как называется промежуточная таблица
            foreignKey: 'gift_id' // определяем наименование внешнего ключа
        });
    };
    return Gift;
};