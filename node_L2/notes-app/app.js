// core modules
// const fs = require('fs')
//
// // fs.writeFileSync('notes.txt', 'This file was created by Node.js!');
// fs.appendFileSync('notes.txt', '\n Let\'s append instead of rewriting!');

// require('./utils');
// const name = 'Armine';

// consty texapoxecinq utils.js >> Simonyan
// const name = require('./utils');
// console.log(name);

//utils.js-um stextsecinq function
// const add = require('./utils');
// const sum = add(5,4);
// console.log(sum);

//created notes.js file
// const getNotes = require('./notes');
// const testNote = getNotes('Buy an egg from store!');
// console.log(testNote);

//external moduls, npm moduls
// const validator = require('validator');
// console.log(validator.isEmail('gmail.com'));
// console.log(validator.isURL('gmail.com'));

// npm init creats package.json, node_modules... use double quotes there
// search in npmjs.com, validator, then search for instucations
// Task: try to use chalk
const chalk = require('chalk');

const success = chalk.bold.green;
const warning = chalk.bgYellowBright.inverse;
const error = chalk.bold.red;

// console.log(success('Success!'));
// console.log(warning('Warning!'));
// console.log(error('Error!'));

// const note = require('./notes.js');
// console.log(note("ok"));

// console.log(process.argv);
// first one - path to the node.js executable in local machine
// second one -  path to our app.js file
// third one - value we actually provided

// console.log(process.argv[2]);

const note = require('./notes.js');
const command = process.argv[2];
// if(command === "add"){
//     console.log("User wants to add a note!")
// }else if(command === "remove"){
//     console.log("User wants to remove a note!")
// }

// terminal
// node app.js remove --title="Note name"


const yargs = require('yargs');
const {hideBin} = require('yargs/helpers'); // this is by documentionation of the yargs
yargs.version('16.2.0'); //terminal - node app.js --version

// console.log(yargs(hideBin(process.argv)).argv); // this is by documentionation of the yargs
// console.log(process.argv);
// console.log(yargs.argv);

//Create add event
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
    handler(argv){
        note.addNotes(argv.title, argv.body);
        // console.log(argv.title, argv.body)
    }
})


//Create remove event
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        note.removeNote(argv.title)
    }
})


//Create list event
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler(){
        console.log(chalk.white.bold('Your Notes!!!'))
        const notes = note.loadNotes()
        notes.forEach(element => console.log(chalk.cyan.bold(element.title)))
    }
})


//Create read event
yargs.command({
    command: 'read',
    describe: 'Read a note',
    // builder: {
    //     title: {
    //         describe: 'Note title',
    //         demandOption: true,
    //         type: 'string'
    //     }
    // },
    handler(argv){
        const noteTitle = argv.noteTitle
        const theNote = note.readNote(noteTitle)
        console.log(theNote)
    }
})

// terminal
// node app.js read --noteTitle="the title of exisitng note"

yargs.parse();

// yargs(hideBin(process.argv))
//     .command('serve [port]', 'start the server', (yargs) => {
//         yargs
//             .positional('port', {
//                 describe: 'port to bind on',
//                 default: 5000
//             })
//     }, (argv) => {
//         if (argv.verbose) console.info(`start server on :${argv.port}`)
//         serve(argv.port)
//     })
//     .option('verbose', {
//         alias: 'v',
//         type: 'boolean',
//         description: 'Run with verbose logging'
//     })
//     .argv

//notes: add, remove, read, list

