const log = console.log
const rq = require('request')

const url_ = 'https://api.darksky.net/forecast/bdcc00afd9a36e2347392f90675df670/'
const forecast = ({latitude,longitude,location},callback) => {

    const url = url_+latitude+','+longitude
    
    rq({url ,json: true}, (error,{body})=>{
        if(error) {
            callback('An error occured, check your network😄',undefined)
        } else if (body.error) {
            callback('Unable to find location',undefined)
        }
        else{
            // log("Tt's currently "+body.currently.temperature+" degrees out")
            // log("Location "+location)
            callback(undefined,{
                temperature : body.currently.temperature,
                location
            })
        }

})
}

module.exports = forecast