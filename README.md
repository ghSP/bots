# Trevor
#### NOTICE: `trevor` is this bots branch

This bot uses the following things:
* `require/module.exports`, not `import/export`
* A command handler
* A few different modules, some I have created/assembled and some from npm
  * `@yaas/bacon-cipher`
  * `discord.js`
  * `figlet`

A normal command file looks like this:
```js
class command {  // This name does not matter
  constructor() {
    this.name = 'figlet';   // The primary way to call this
                            // make it unique along with the aliases

    this.aliases = ['format'];   // Leave empty if no extra ways to call
                                 // are necessary
  }
}

module.exports = command;
```