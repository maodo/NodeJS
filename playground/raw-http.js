const https = require('https')

const url = 'https://api.darksky.net/forecast/bdcc00afd9a36e2347392f90675df670/40,-75'

const request = https.request(url, (response) => {
   let data = ''
    response.on('data',(chunk) =>{
        data = data + chunk.toString()
    })

    response.on('end', () =>{
        console.log(JSON.parse(data))

    })
})

request.on('error', (error) => {
    console.log('error',error)
})
request.end()