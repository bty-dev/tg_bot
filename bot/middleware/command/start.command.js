import bot from '../../connections/token.connection.js'

export default bot.start( async (ctx) => {
    await ctx.reply("Hola!");
});