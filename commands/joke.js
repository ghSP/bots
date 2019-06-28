class command {
  constructor() {
    this.name = 'joke';
    this.aliases = ['jk', 'lol'];
  }

  async run(client, message, args) {
    message.react('👍');
    message.react('👎');
  }
}