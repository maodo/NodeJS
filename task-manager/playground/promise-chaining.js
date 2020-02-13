require('../src/db/mongoose')
const User =  require('../src/models/user')
//5e44a6efdb62266df884d500

//  User.findByIdAndUpdate('5e44523485e5514d007fb6ec',{ age: 1 })
//  .then((user) => {
//      console.log(user)
//      return User.countDocuments({ age: 1 })
//  }).then((result) => {
//     console.log(result)
//  }).catch((e) => console.log(e))

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age: age})
    const count = await User.countDocuments({ age: age })
    return count
}

updateAgeAndCount('5e44523485e5514d007fb6ec',2)
.then((count) =>{
    console.log(count)
}).catch((e) => console.log(e))