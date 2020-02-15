const express = require('express')
const router = express.Router()
const Task = require('../models/task')


// Route for task creation

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.send(task).status(201)
    } catch (e) {
        res.send(e).status(400)
    }
})

// Route for getting tasks
router.get('/tasks', async (req, res) => {
    
    try {
        const task = await Task.find({})
        res.send(task)
    } catch (e) {
        res.send().status(400)
    }

}) 
//

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(400).send()
        }
        res.send(task).send(200)
    } catch (e) {
        res.send(e).status(400)
    }
})

router.patch('/tasks/:id', async (req, res) =>{
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description','completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    
    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!'})
    }

    try {
        const task = await Task.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
        res.send(task)
    } catch (e) {
        res.send(e).status(400)
    }

})

router.delete('/tasks/:id', async (req,res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.send(e).status(400)
    }
})

module.exports = router