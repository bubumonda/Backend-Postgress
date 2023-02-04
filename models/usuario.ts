import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('usuarios',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.SMALLINT
    }
},{
    timestamps: false
});

export default Usuario;