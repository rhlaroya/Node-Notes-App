const fs = require('fs');
const chalk = require('chalk');

const addNote = (title,body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse.bold('New note added!'))
    } else {
        console.log(chalk.green.inverse.bold('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse.bold("Successfully removed note " + title));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse.bold("Note " + title + " not found!"));
    }
}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return [];
    }
    
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.white.inverse('Your Notes:'));
    notes.forEach((note) => {
        console.log(chalk.inverse(note.title));
    })
}

const readNotes = (title) => {
    const notes = loadNotes();
    note = notes.find((note) => note.title === title);

    if(note){
        console.log(chalk.magenta.inverse(note.title));
        console.log(chalk.magenta(note.body));
    } else {
        console.log(chalk.red.inverse.bold('Cannot find list!'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}