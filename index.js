const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '5903124574:AAHBF88cRbiJWtlRQJmO1iA4f9PSmjBT71U';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log(`Received message "${msg.text}" from chat "${chatId}"`);
  // send a message to the chat acknowledging receipt of their message
  switch(msg.text) {

    case '/start':
      bot.sendVideo(chatId, 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' ,{caption: '🔜欢迎来到🌐恒信购卡\n\n✅ 当前卡密充足，请放心购买\n\n🎗 本系统提供24H自助购卡服务\n\n🤖 自助机器人只支持整组购买\n【移动充值卡1组为10张】\n\n📚 没有USDT泰达币的新朋友\n可以进入频道【教程大全】学习\n\n👨🏻‍💻【人工客服 @hengxinziben 】\n💵💵💵💵💵💵💵💵💵\n下方有按钮可以进行自助操作 👇'});
      }
        
    });
  
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
// send a message to the chat acknowledging receipt of their message
  switch(msg.text) {

    case '/start':
      bot.sendMessage (chatId, '🌐 🌐 🌐 🌐 🌐 🌐 🌐',
        {
        reply_markup: JSON.stringify({
          keyboard: [
            [{text: 'Ⓜ️购10张'}, {text: 'Ⓜ️购20张'}, {text: 'Ⓜ️购30张'}],
            [{text: 'Ⓜ️购50张'}, {text: 'Ⓜ️购100张'}, {text: '🛃提取卡密'}],
            [{text: '👩‍💻人工客服'}, {text: '📮代理取货'}, {text: '📲返回频道'}],
          ],
          resize_keyboard: true,
          one_time_keyboard: false
        })
  });
      break;
        case "Ⓜ️购10张":
            bot.sendPhoto(chatId, 'https://t.lsky.pro/i/2023/05/07/6457555081198.jpg' ,{caption: '单价：85元/张\n数量：10张\n总价：850元\n总价：120USDT\n优惠：首次下单赠送1/张\n\n👩‍💼收款地址(USDT-TRC20)：\n\n  TD6zfGPQn3arC1UaBWpHLnpRfRR8s5fHsi \n\n👆点击复制钱包,地址尾号 s5fHsi👆\n\n提示：\n- 对上述地址👆交易所或钱包提币会有1-3分钟确认期，请等待确认提币成功后点击（提取卡密） 后 Bot 会为您发送个人提卡密令，请妥善保管好，请勿与他人分享!\n- 请耐心等待，密令激活成功后 Bot 会通立即发送您的对应卡号卡密！'});
            break;
        case "Ⓜ️购20张":
            bot.sendPhoto(chatId, 'https://t.lsky.pro/i/2023/05/07/6457555081198.jpg' ,{caption: '单价：79元/张\n数量：20张\n总价：1590元\n总价：222USDT\n优惠：赠送2/张\n\n👩‍💼收款地址(USDT-TRC20)：\n\n  TD6zfGPQn3arC1UaBWpHLnpRfRR8s5fHsi \n\n👆点击复制钱包,地址尾号 s5fHsi👆\n\n提示：\n- 对上述地址👆交易所或钱包提币会有1-3分钟确认期，请等待确认提币成功后点击（提取卡密） 后 Bot 会为您发送个人提卡密令，请妥善保管好，请勿与他人分享!\n- 请耐心等待，密令激活成功后 Bot 会通立即发送您的对应卡号卡密！'});
            break;
        case "Ⓜ️购30张":
            bot.sendPhoto(chatId, 'https://t.lsky.pro/i/2023/05/07/6457555081198.jpg' ,{caption: '单价：78元/张\n数量：30张\n总价：2358元\n总价：320USDT\n优惠：赠送3/张\n\n👩‍💼收款地址(USDT-TRC20)：\n\n  TD6zfGPQn3arC1UaBWpHLnpRfRR8s5fHsi \n\n👆点击复制钱包,地址尾号 s5fHsi👆\n\n提示：\n- 对上述地址👆交易所或钱包提币会有1-3分钟确认期，请等待确认提币成功后点击（提取卡密） 后 Bot 会为您发送个人提卡密令，请妥善保管好，请勿与他人分享!\n- 请耐心等待，密令激活成功后 Bot 会通立即发送您的对应卡号卡密！'});
            break;
        case "Ⓜ️购50张":
            bot.sendPhoto(chatId, 'https://t.lsky.pro/i/2023/05/07/6457555081198.jpg' ,{caption: '单价：70元/张\n数量：50张\n总价：3500元\n总价：450USDT\n优惠：赠送5/张\n\n👩‍💼收款地址(USDT-TRC20)：\n\n  TD6zfGPQn3arC1UaBWpHLnpRfRR8s5fHsi \n\n👆点击复制钱包,地址尾号 s5fHsi👆\n\n提示：\n- 对上述地址👆交易所或钱包提币会有1-3分钟确认期，请等待确认提币成功后点击（提取卡密） 后 Bot 会为您发送个人提卡密令，请妥善保管好，请勿与他人分享!\n- 请耐心等待，密令激活成功后 Bot 会通立即发送您的对应卡号卡密！'});
            break;
        case "Ⓜ️购100张":
            bot.sendPhoto(chatId, 'https://t.lsky.pro/i/2023/05/07/6457555081198.jpg' ,{caption: '单价：65元/张\n数量：100张\n总价：6500元\n总价：895USDT\n优惠：赠送11/张\n\n👩‍💼收款地址(USDT-TRC20)：\n\n  TD6zfGPQn3arC1UaBWpHLnpRfRR8s5fHsi \n\n👆点击复制钱包,地址尾号 s5fHsi👆\n\n提示：\n- 对上述地址👆交易所或钱包提币会有1-3分钟确认期，请等待确认提币成功后点击（提取卡密） 后 Bot 会为您发送个人提卡密令，请妥善保管好，请勿与他人分享!\n- 请耐心等待，密令激活成功后 Bot 会通立即发送您的对应卡号卡密！'});
            break;
        case "🛃提取卡密":
            bot.sendPhoto(chatId, 'https://t.lsky.pro/i/2023/05/07/64574fba761cd.jpg' ,{caption: '✅ 请向我发送您的交易哈希系统审核\n🌐预计时长1~5分钟，重复提交无效\n🗣审核通过Bot会通知您，请耐心等待...\n🔘提现地址是否正确🔘提现金额是否正确\n🔘提现状态是否成功🔎 如何提交交易哈希\n\n'});
            break;
        case "👩‍💻人工客服":
            bot.sendPhoto(chatId, 'https://t.lsky.pro/i/2023/05/07/64574fbacc825.jpg' ,{caption: '🙋🏻‍♂️ 恒信客服:                   \n\n🌐 🌐 🌐 🌐 🌐 🌐 🌐\n在线时间上午10点~凌晨2点\n'});
            break;
        case "📮代理取货":
            bot.sendPhoto(chatId, 'https://t.lsky.pro/i/2023/05/07/64574fbb69149.jpg' ,{caption: '🔰 读取数据成功\n✅ 您当前余额为【0】USDT\n❇️ 申请代理需【8888】人民币\n🌐 折合1268USDT\n⚠️ 您当前余额不足\n👨🏻‍💻 请联系人工客服为您充值\n\n代理权益说明\n-代理费用在余额可随时使用\n-成为代理立赠两组移动充值卡\n-工作室赠送自助机器人一个\n-永久享受代理价65/张卡密\n'});
            break;
        case "📲返回频道":
            bot.sendPhoto(chatId, 'https://t.lsky.pro/i/2023/05/07/64574fbc0b7f5.jpg' ,{caption: '  👨‍👨‍👦‍👦 欢迎返回我们的财富项目群👩‍👩‍👧‍👦\n\n        🌐恒信资本总频道🌐\n\n                          \n\n  👆点击返回全网20万人频道👆\n\n 📲📲📲📲📲📲📲📲📲📲📲📲\n'});
            break;
}
        
});














