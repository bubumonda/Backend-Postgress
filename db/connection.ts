import { Sequelize } from 'sequelize';

const db = new Sequelize('postgres', 'postgres', '1234',{
    host: 'localhost',
    dialect: 'postgres',
    // logging: false,
});

export default db;