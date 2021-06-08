const fs = require('fs')
const chalk = require('chalk')

const getNotes = (note) => {
    return 'Note: '+note;
}
// console.log(getNotes('test'));


const addNotes = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title )//filtery voncvor ciklov pttvi, objecti amen elementy notena
    const duplicateNotes = notes.find((note) => note.title === title )//findy arajiny gtneluc heto kangnuma

    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)
        console.log(chalk.bgGreen.black('New note added!'))
    }else{
        console.log(chalk.bgRed.black('The title is taken!'))
    }
}

const saveNotes = (notes) => {
    const savingNotes = JSON.stringify(notes);
    fs.writeFileSync('notes.json',savingNotes)
}

const removeNote = (title) => {
    const notes = loadNotes()
    // This was my dummy version but still worked
    // const newNotes = []
    // const match = notes.filter(function(note){
    //     if(note.title !== title){
    //         newNotes.push({
    //             title: note.title,
    //             body: note.body
    //         })
    //     }
    //     saveNotes(newNotes)
    //     return newNotes;
    // })

    //This is the best solution
    const notesToKeep = notes.filter((note) => note.title !== title )
    if(notes.length === notesToKeep.length){
        console.log(chalk.bgRed.black('No note found!'))
    }else{
        console.log(chalk.bgGreen.black('Note is removed!'))
    }

    saveNotes(notesToKeep)
}


const loadNotes = () => {
    try{
        const existingNotes = fs.readFileSync('notes.json');
        return JSON.parse(existingNotes)
    } catch (e) {
        return [];
    }
}

const readNote = (noteTitle) => {
    const notes = loadNotes()
    const theNote = notes.find((note) => note.title == noteTitle)

    return (theNote ? theNote :  chalk.red("No note found with provided title!"))

}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    loadNotes: loadNotes,
    readNote: readNote,
}