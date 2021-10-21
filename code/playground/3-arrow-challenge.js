//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){ //gwne functie die enkel iets returnd dus geen logica
       return notDone = this.tasks.filter((task) => task.completed === false)//shorthand enkel als ge iets rechtstreeks returnd
    }
}

console.log(tasks.getTasksToDo())
/*
const ophalen = (arguments) => {}   --> voor functies met logica in

const ophalen = function(arguments) {}  -->originele functie

const duplicateNotes = notes.filter( (note) => note.title == title) -->filter functie
*/
