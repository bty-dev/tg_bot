import dotenv from 'dotenv';
import { Telegraf } from 'telegraf';

dotenv.config();

export const bot = new Telegraf(process.env.BOT_TOKEN);