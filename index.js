const { Client } = require('discord.js');
const Handler = require('@yaas/command-handler');

const client = new Client();

client.config = require('./config');
client.handler = new Handler({ folder: __dirname + '/commands/', prefix: Array.from(client.config.prefix) });
client.ownerID = client.config.ownerID;

const print = (...args) => console.log(...args);

client.on('ready', () => {
  print(`Name: ${client.user.username}\nServers: ${client.guilds.array().length}`);
});

client.on('message', (message) => {
  const content = message.content;
  const author = message.author;
  
  if (author.bot || content.indexOf(client.config.prefix) !== '0') return;

  const args = content.split(/\s+/g);
  const command = args.shift();

  const cmd = client.handler.get(command);
  if (cmd != null) {
    cmd.run(client, message, args);
    return true;
  } else {
    return null;
  }
});

client.on('error', (err) => print('%c' + err, 'color:red'));

client.login(client.config.token);