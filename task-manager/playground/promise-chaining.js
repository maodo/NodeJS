require('../src/db/mongoose')
const User =  require('../src/models/user')
//5e44a6efdb62266df884d500

 User.findByIdAndUpdate('5e44523485e5514d007fb6ec',{ age: 1 })
 .then((user) => {
     console.log(user)
     return User.countDocuments({ age: 1 })
 }).then((result) => {
    console.log(result)
 }).catch((e) => console.log(e))

