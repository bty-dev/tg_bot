import db from "../../connections/db.connection.js"
import UserModel from '../../models/user.model.js'

export const saveUser = async (login, username) => {
    await db.sync();

    const textAfterSaving = `User ${login}-${username} is saved!`;
    const textAfterUpdate = `User ${login}-${username} has been updated!`;

    const user = await UserModel.findOne({
        where: {
            login
        }
    });

    if (!user) {
        await UserModel.create({
            login,
            username
        });
        return textAfterSaving;
    }

    if (user.username !== username) {
        await UserModel.update({
            username
        }, {
            where: {
                login
            }
        })
    }
    return textAfterUpdate;
}