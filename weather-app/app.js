const geocode = require('./utils/geocode')
const forecast = require('./utils/getTemperature')

geocode('dakar',(error, response) => {
    if(error) console.error(error)
    else {
        forecast(response,(error, data) => {
            if (error) console.error(error)
            else{
                console.log(data)
            }
        })
    }
})
