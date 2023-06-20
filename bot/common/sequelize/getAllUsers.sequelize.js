import db from "../../connections/db.connection.js"
import UserModel from '../../models/user.model.js'

export const getAllUsers = async () => {
    await db.sync();

    const users = await UserModel.findAll();

    return users.map(user => ({
        id: user.id,
        username: user.username
    }))
}

export const getAllUsersIds = async () => {
    await db.sync();

    const users = await UserModel.findAll();

    return users.map(user => user.id);
}