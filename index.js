import dotenv from 'dotenv';
import Telegraf from 'telegraf';
import {
    saveUser
} from './bot/common/sequelize/saveUser.sequelize.js';
import {
    getAllUsers,
    getAllUsersIds
} from './bot/common/sequelize/getAllUsers.sequelize.js';
import {
    CronJob
} from 'cron';
import express from 'express';
import cors from 'cors';
import employeesRoutes from './server/routes/employees.routes.js';
import statisticsRoutes from './server/routes/statistics.routes.js'
import messagesRoutes from './server/routes/messages.routes.js';
import authRoutes from './server/routes/auth.routes.js';
import axios from 'axios';
import {
    getAllEmployees
} from './server/controllers/employees.controller.js';


dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
    const login = String(ctx.chat.id);
    const username = ctx.chat.username || "anonimous";

    try {
        const result = await saveUser(login, username);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
});

bot.command(("users"), async (ctx) => {


    ctx.reply([{
        id: 1,
        name: "Иванов Александр Сергеевич",
        position: "Программист",
    }, {
        id: 2,
        name: "Николаев Игорь Алексеевич",
        position: "Программист",
    }])
})




bot.on("message", async (ctx) => {
    try {
        const date = new Date(2023, 10, 20, 2, 13);
        const job = new CronJob({
            cronTime: date,
            onTick: () => {
                ctx.reply("ГБУ «Региональный центр развития образования Оренбургской области» решил помочь системе образования!")
            },
            onComplete: () => ctx.reply("Рассылка завершена!"),
            startNow: true,
        })
    } catch (error) {
        console.log(error);
    }
})

bot.launch();

export const messagesArr = [{
    id: 1,
    date: "29.11.2022",
}]


const app = express();

const PORT = 5000;
app.use(cors());
app.use(express.json())
app.use(employeesRoutes)
    .use(statisticsRoutes)
    .use(messagesRoutes)
    .use(authRoutes)

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})

app.post('/api/createMessage', function (req, res) {

    const {
        date,
        content
    } = req.body;

    try {
        const dateD = new Date(...date);
        console.log(dateD);
        const job = new CronJob({
            cronTime: dateD,
            onTick: () => {
                axios.post(`https://api.telegram.org/bot6050028592:AAE5bNkJSBadsW63lSF5DzoakCYYwEb26rA/sendMessage?chat_id=-1001686791009&text=${content}`)
            },
            onComplete: () => {

            },
            startNow: true,
        })
    } catch (error) {
        console.log(error);
    }

    res.status(200).json("Message correct!");
});