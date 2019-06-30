class command {
  constructor() {
    this.name = 'data';
    this.aliases = [];
    this.admin = true;
  }

  async run(client, message, args) {
    const data = {};

    data.client_username = client.user.username;
    data.server_number = client.guilds.array().length;
    data.server_list = client.guilds.array().join('\n');
    data.member_number = client.users.array().length;
    data.member_list = client.users.array().join('\n');
    data.owner_name = client.users.get(client.config.ownerID).tag;

    for (const key of Object.keys(data)) {
      message.author.send(`${key}:\n${data[key]}`);
    }
  }
}

module.exports = command;