const figlet = require('figlet');

class command {
  constructor() {
    this.name = 'figlet';
    this.aliases = ['format', 'fancy'];
  }

  async run(client, message, args) {
    message.delete();
    if (args.join(' ').length < 1) return;
    figlet(args.join(' ') + ' - ' + message.author.username, (err, txt) => {
      if (err) {
        console.error('Error with figlet!');
        console.dir(err);
        return;
      }
      message.channel.send('```\n' + txt + '\n```');
    });
  }
}

module.exports = command;