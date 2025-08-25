module.exports = (sequelize, Sequelize) => {
    var Category = sequelize.define(
        'category', // определяем имя таблицы
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
            category_id: {
                type: Sequelize.INTEGER
            }
    });

    // Определяем связи таблицы category с другими таблицами
    Category.associate = function(models) {
        // Определяем внешний ключ на саму таблицу: необходимо для создания вложенных категорий
        Category.hasMany(models.category, {
            foreignKey: 'category_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            sourceKey: 'id'
        });
        // Определение связи многие-ко-многим с таблицей user. Это определение связи с одной стороны.
        // Связь также определена со второй стороны (со стороны таблицы user): в файле user.controller.js
        Category.belongsToMany(models.user, {
            through: 'user_category', //  указываем, как называется промежуточная таблица
            foreignKey: 'category_id' // определяем наименование внешнего ключа. Если не указать, тогда имя ключа будет задано автоматически, как categoryId
        });

        // Определение связи многие-ко-многим с таблицей gift. Это определение связи с одной стороны.
        // Связь также определена со второй стороны (со стороны таблицы gift): в файле gift.controller.js
        Category.belongsToMany(models.gift, {
            through: 'category_gift', //  указываем, как называется промежуточная таблица
            foreignKey: 'category_id' // определяем наименование внешнего ключа
        });
    };
    return Category;
};