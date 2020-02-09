

const tasks = {
    tasks : [
        {
        text: 'My task 1',
        completed: true
    },{
        text: 'My task 2',
        completed: false
    },{
        text: 'My task 3',
        completed: false
    }
],
    getTasksToDo(){
        const tasksToDo = this.tasks.filter((task)=>{
            return task.completed === false
        })
        return tasksToDo
    }
}
console.log(tasks.getTasksToDo())