class command {
  constructor() {
    this.name = 'joke';
    this.aliases = ['jk', 'lol'];
  }

  async run(client, message, args) {
    message.react('👍');
    message.react('👎');
    console.log(`${message.author.username} told a joke in ${message.guild.name}`);
  }
}

module.exports = command;