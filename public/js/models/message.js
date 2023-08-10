import DataTypes from "sequelize";
import sequelize from "../db.config.js";

export default sequelize.define('message', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        require: true
    },
    email: {
        type: DataTypes.STRING,
        require: true
    },
    form_message: {
        type: DataTypes.TEXT,
        require: true
    }
})

sequelize.sync().then(() => {
    console.log('Book table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
