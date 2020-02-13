const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// Route for user creation
app.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }

})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
    
    
})
// Fetch user by ID
app.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = User.findById(_id)

        if(!user){
            return res.status(404).send()
        }
        res.send(user)
        
    } catch (e) {
        res.status(500).send()
    }

})

// Route for task creation

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save()
    .then(() => res.status(201).send(task))
    .catch((e) => res.status(400).send(e))
})

// Route for getting tasks
app.get('/tasks',(req, res) => {
    
    Task.find({})
    .then((task) => res.status(200).send(task))
    .catch((e) => res.status(400).send(e))

}) 
//

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id
    Task.findById(_id)
    .then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    })
    .catch((e) => res.status(404).send(e))
})

app.listen(port, () => {
    console.log('Server is up on port '+port)
})