const fs = require('fs');
const getNotes = require('./notes');
const validator = require('validator').default;
const chalk = require('chalk');
const log = console.log;
var emoji = require('node-emoji')



// log(chalk.blue('Hello') + ' World' + chalk.red('!'));
 debugger
// Compose multiple styles using the chainable API
log(chalk.black.bgGreen('Success!'));
log(chalk.black.bgRed('Error!'));
log('hello !')
 
log(emoji.get('coffee'))// returns the emoji code for coffee (displays emoji on terminals that support it)

//
const book = {
    'title':'The King is born',
    'author': 'maodo'
}
