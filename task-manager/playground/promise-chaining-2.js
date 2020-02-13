require('../src/db/mongoose')
const Task =  require('../src/models/task')


//  Task.findByIdAndDelete('5e44583bd399b030d49af312')
//  .then((task) => {
//      console.log(task)
//      return Task.countDocuments({ completed: false })
//  }).then((result) => {
//     console.log(result)
//  }).catch((e) => console.log(e))

 const deleteTaskAndCount = async (id) => {
     await Task.findByIdAndDelete(id)
     const count = await Task.countDocuments({ completed: false})
     return count
 }

 deleteTaskAndCount('5e42f552e9c2b845286852f8')
 .then((count) => console.log(count))
 .catch((e) => console.log(e))