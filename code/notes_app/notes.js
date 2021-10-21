const fs = require("fs")
const chalk = require("chalk")
//-----------------------------------------------------------------------------------------\\
const addNote = (title, body) => {//arrow function
  const notes  = loadNotes()

  const duplicateNotes = notes.find((note) => note.title === title)

  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes);
      console.log(chalk.green.inverse("new note added"))
  }
  else
  {
    console.log(chalk.red.inverse("note title already exists"))
  }
}
//-------------------------------------------------------------------------------------------\\
const removeNote = (title) => {
  const notes = loadNotes()
  //filter pakt enkel mee als de return true is al de rest wordt weggelaten
  const notesToKeep = notes.filter( (note) => note.title !== title)

  if (notes.length == notesToKeep.length) {             //als er een note verwijderd word is de lengte note-1 anders zijn ze even lang
    console.log(chalk.bgRed("no note found"))
  }
  else{
    console.log(chalk.bgGreen("note removed"))
  }


  saveNotes(notesToKeep)

}
//-----------------------------------------------------------------------------------------\\
const listNotes = () =>{
  const notes = loadNotes()
  console.log(chalk.magenta("youre notes"))
  notes.forEach( (note)=> console.log(note.title) )
  //notes.forEach( (note)=> console.log(note) ) --> alles printe ipv enkel titel


}
//-------------------------------------------------------------------------------------------\\
const readNotes = (title) =>{
  const notes = loadNotes()

  const noteRead = notes.find( (note) => note.title === title)
  if(noteRead)
  {
    console.log(chalk.bold.cyan(noteRead.title) + ":" + noteRead.body )
  }
  else {
    console.log(chalk.bold.red("title doesnt exist"))
  }

}


//-----------------------------------------------------------------------------------------\\
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync("notes.json",dataJSON)
}
//-----------------------------------------------------------------------------------------\\

const loadNotes = () => {
  try{
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON)
  }catch (e) {
    return[]
  }
}
//-----------------------------------------------------------------------------------------\\

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
}
