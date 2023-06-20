import db from "../connections/db.connection.js";
import {
    DataTypes
} from "sequelize";

export const UserModel = db.define("user", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    username: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    privileged: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    }
}, {
    timestamps: true,
    updatedAt: false,
});

export default UserModel;