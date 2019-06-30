class command {
  constructor() {
    this.name = 'clean';
    this.aliases = ['purge', 'clear'];
    this.admin = true;
  }

  async run(client, message, args) {
    message.channel.bulkDelete(parseInt(args[0], 10) || 25);
    message.delete();
  }
}

module.exports = command;