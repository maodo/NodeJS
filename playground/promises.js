const doWorkPromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        // resolve([2,5,8])
        reject('Erroooooor !')
    },2000)
})

doWorkPromise.then((result) => {
    console.log('Success !',result)
}).catch((error)=>{
    console.log(error)
})


//                           Fulfilled
//                          /
// Promise -- Pending ----> 
//                          \
//                            rejected
//