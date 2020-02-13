require('../src/db/mongoose')
const Task =  require('../src/models/task')
//5e44a6efdb62266df884d500

//  Task.findByIdAndDelete('5e44583bd399b030d49af312')
//  .then((task) => {
//      console.log(task)
//      return Task.countDocuments({ completed: false })
//  }).then((result) => {
//     console.log(result)
//  }).catch((e) => console.log(e))

 const findByIdAndDelete = async (id) => {
     const task = await Task.findByIdAndDelete(id)
     const count = await Task.countDocuments({ completed: false})
     return count
 }

 findByIdAndDelete('5e42f552e9c2b845286852f8')
 .then((count) => console.log(count))
 .catch((e) => console.log(e))