module.exports = (sequelize, Sequelize) => {
    var User = sequelize.define(
        'user', // определяем имя таблицы
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
            birth_date: {
                type: Sequelize.DATE,
                allowNull: false
            },
            username: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            password: {
                type: Sequelize.STRING(50),
                allowNull: false
            }
    });

    // Определяем связи таблицы user с другими таблицами
    User.associate = function(models) {
        // Определение связи многие-ко-многим с таблицей category. Это определение связи с одной стороны.
        // Связь также определена со второй стороны (со стороны таблицы category): в файле category.controller.js
        User.belongsToMany(models.category, {
            through: 'user_category', //  указываем, как называется промежуточная таблица
            foreignKey: 'user_id' // определяем наименование внешнего ключа
        });
        User.hasMany(models.gift, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            sourceKey: 'id'
        });
    };
    return User;
};