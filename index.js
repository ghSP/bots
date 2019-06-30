const { Client } = require('discord.js');
const { readdirSync } = require('fs');
const config = require('./config');

const client = new Client();
client.commands = new Map()
client.aliases = new Map();

client.config = config;
client.ownerID = client.config.ownerID;

const print = (type, string, ...args) => {
  if (type) {
    string.split('\n').forEach(l => console.log(`[${type.toUpperCase()}] ${l}`, ...args));
  } else {
    print('INFO', string, ...args);
  }
}

client.on('ready', () => {
  print('READY',`~~~~~~~\nName: ${client.user.username}\nServers: ${client.guilds.array().length}`);
});


const cmdFiles = readdirSync('./commands/');
for (const file of cmdFiles) {
  const cmd = require(`./commands/${file}`);
  const command = new cmd();
  client.commands.set(command.name, command);
  command.aliases.forEach(alias => {
    client.aliases.set(alias, command.name);
  });
}



client.on('message', (message) => {
  const content = message.content;
  const author = message.author;
  
  if (author.bot || !content.startsWith(client.config.prefix)) return;

  const args = content.slice(client.config.prefix.length).split(/\s+/g);
  const command = args.shift();

  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));

  if (cmd != null) {
    if (cmd.admin === true) {
      if (author.id !== client.config.ownerID) {
        return null;
      }
      cmd.run(client, message, args);
      return true;
    }
    cmd.run(client, message, args);
    return true;
  } else {
    return null;
  }
});

client.on('error', (err) => print('ERROR','%c' + err, 'color:red'));

client.login(client.config.token);