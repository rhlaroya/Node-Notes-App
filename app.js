const getNotes = require('./notes.js');
const yargs = require('yargs');
const chalk = require('chalk');

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: ' + argv.title)
        console.log(argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note!')
    }
});

yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function(){
        console.log('Listing the notes!')
    }
});

yargs.command({
    command: 'read',
    describe: 'Reads the notes',
    handler: function(){
        console.log('Reading the notes!')
    }
});

// add, remove, reaed, list

yargs.parse();