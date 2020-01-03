const fs=require('fs');
const uniq=require('uniq');
const chalk=require('chalk');
var getNotes=(title)=>{
    var notes=loadNotes();
    var body=notes.find((element)=>element.title==title);
    if(body){
    console.table(body);
    }else{
        console.log(chalk.yellow.inverse("Title not found"));
    }
};
const addNotes=(title,body)=>{
    var notes=loadNotes();
    // var duplicate=notes.filter(element => {
    //     return element.title===title;
    // });
    //Using find
    var duplicate=notes.find(element=> element.title===title);
    if(duplicate.length==0){
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log(chalk.green('Adding notes....'));
    }else{
        console.log(chalk.red.inverse('Notes already exists'));
    }
}
const saveNotes=(notes)=>{
    notes=JSON.stringify(notes);
    fs.writeFileSync('notes.json',notes);
}
const loadNotes=()=>{
    try{
        const bufferData=fs.readFileSync('notes.json');
        const jsonData=bufferData.toString();
        const Data=JSON.parse(jsonData);
        return Data;
    }
    catch(err){
        return [];
    }
}
const removeNotes=(title,body)=>{
    const notes=loadNotes();
    const element=notes.filter((element)=>{
        if(element.title!=title){
            return element
        }
    });
    if(element.length!=notes.length){
        saveNotes(element);
        console.log(chalk.greenBright('Notes removed...!'));
    }
    else{
        console.log(chalk.red('Note does not exists!'));
    }
}
const listNotes=()=>{
    const notes=loadNotes();
    console.table(notes);
}
module.exports={
    getNotes,
    addNotes,
    removeNotes,
    listNotes
}