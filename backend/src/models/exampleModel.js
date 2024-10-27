import conn from '../config/conn.js'
import { DataTypes } from 'sequelize'

const table_mysql = "example"

const Example = conn.define
(table_mysql, {
    id: {
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM,
        values: ["pendente", "concluida"]
    }
}, {
    tableName: table_mysql,
})

export default Example;