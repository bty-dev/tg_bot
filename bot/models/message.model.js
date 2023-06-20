import db from "../connections/db.connection.js";
import {
    DataTypes
} from "sequelize";

export const MessageModel = db.define("messages", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },
    sendDate: {
        type: DataTypes.STRING,
        allowNull: false,

    },
}, {
    timestamps: true,
    updatedAt: false,
});

export default MessageModel;