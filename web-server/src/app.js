const path = require('path')
const express = require('express')
const geocode = require('../../weather-app/utils/geocode')
const forecast = require('../../weather-app/utils/getTemperature')


const app = express()

const publicDirectory = path.join(__dirname,'../public')

// geocode('dakar', (data) => forecast(data,(dt)=>console.log(dt)))
app.set("view engine","hbs")
app.use(express.static(publicDirectory))

app.get('/', (req,res)=>{
    res.render('index', {
        name: 'Sadibou'
    })
})


app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }
    geocode(req.query.address, (error=null,response={}) =>{

        if(error){
            console.log("er:",error)
            return res.send({ error })
        }

        forecast(response, (error=null,forecastData) => {
            if(error){
                console.log("error2")
                return res.send({error})
            }
            res.send({
                location: forecastData.location,
                temperature: forecastData.temperature,
                address: req.query.address
            })
        })
    })
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')

})