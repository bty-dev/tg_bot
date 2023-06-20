import {
    messagesArr
} from '../../index.js';
export const getAllMessages = (req, res) => {

    res.status(200).json(messagesArr);
}

export const createMessage = (req, res) => {
    const date = req.params.date;



}


export const getAllMessagesFunc = async () => {
    await db.sync();

    const messages = await MessageModel.findAll();

    return messages.map(message => ({
        id: message.id,
        sendDate: message.sendDate
    }))
}