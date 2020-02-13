require('../src/db/mongoose')
const Task =  require('../src/models/task')
//5e44a6efdb62266df884d500

 Task.findByIdAndDelete('5e44583bd399b030d49af312')
 .then((task) => {
     console.log(task)
     return Task.countDocuments({ completed: false })
 }).then((result) => {
    console.log(result)
 }).catch((e) => console.log(e))

