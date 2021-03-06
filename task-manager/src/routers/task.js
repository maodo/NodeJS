const express = require('express')
const router = express.Router()
const Task = require('../models/task')
const auth = require('../middleware/auth')


// Route for task creation

router.post('/tasks', auth, async (req, res) => {
    
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    try {
        await task.save()
        res.send(task).status(201)
    } catch (e) {
        res.send(e).status(400)
    }
})

// Route for getting tasks
router.get('/tasks', auth, async (req, res) => {
    
    try {
        await req.user.populate('tasks').execPopulate()
        res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send(e)
    }

}) 
//

router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id
    try {
        
        const task = await Task.findOne({ _id, owner: req.user._id })
        if (!task) {
            return res.status(400).send()
        }
        res.send(task).send(200)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.patch('/tasks/:id', auth, async (req, res) =>{
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description','completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    
    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!'})
    }

    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id})
        
        if(!task){
            return res.status(404).send()
        }

        updates.forEach((update) => task[update] = req.body[update])
        await task.save()
        res.send(task)
    } catch (e) {
        res.send(e).status(400)
    }

})

router.delete('/tasks/:id', auth, async (req,res) => {
    try {
        const task = await Task.findOneAndDelete({_id: req.params.id, owner: req.user._id})
        if(!task){
            return res.status(404).send()
        }
        
        res.send(task)
    } catch (e) {
        res.send(e).status(400)
    }
})

module.exports = router