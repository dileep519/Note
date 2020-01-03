const yargs=require('yargs');
const notes=require('./notes.js');
// const util=require('./utils.js');
// const getnotes=require('./notes');
// const name='Dileep';
// console.log(name,getnotes.getNotes);
// console.log(util.check('dileepchundu7@gmail.com'));
// console.log(chalk.black.bgYellow.underline (notes.getNotes));

//ARGUMENTS
//const cmd=process.argv[2];
// console.log(process.argv);
// const cmd=yargs.argv._;

// creating add,remove,read ,list commands

//setting yargs version

yargs.version('1.1.0');
// add
yargs.command({
    command:'add',
    describe:'Add a new notes',
    builder:{
        title:{
            describe:'Title of notes',
            demandOption:true,
            type:String
        },
        body:{
            describe:'Body of the title',
            demandOption:true,
            type:String
        }
    },
    handler:(argv)=>{
        var Title=argv.title,Body=argv.body;
        notes.addNotes(Title,Body);
    }
});

// remove
yargs.command({
    command:'remove',
    describe:'Remove notes',
    builder:{
        title:{
            describe:'Title to remove',
            demandOption:true,
            type:String
        },
        body:{
            describe:'Body assoiated with title',
            demandOption:true,
            type:String
        }
    },
    handler:(argv)=>{
        notes.removeNotes(argv.title,argv.body);
    }
});

//read

yargs.command({
    command:'read',
    describe:'Read notes',
    builder:{
        title:{
            describe:'Title of notes to read',
            demandOption:true,
            type:String
        }
    },
    handler:(argv)=>{
        notes.getNotes(argv.title);
    }
});

// list

yargs.command({
    command:'list',
    describe:'List of notes',
    handler:()=>{
        notes.listNotes();
    }
});
// console.log(yargs.argv);
// or
// yargs.argv
// or
yargs.parse();
// we should specify yargs.argv in the program so make yargs work
// Or we can use yargs.parse().