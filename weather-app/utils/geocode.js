const rq = require('request')
const endpoint ='https://api.mapbox.com/geocoding/v5/mapbox.places/';
const access_token='pk.eyJ1IjoibWFvZG8iLCJhIjoiY2s2OXczdzhjMDJhZzNubXY3cDVsYnRxMSJ9.Sw4oHyVAIGXPb4fYfAEkrg'

const geocode = (address,callback) => {
    const url = endpoint+address+'.json?'+'access_token='+access_token;
    
    rq({url,json: true}, (error,{body}={}) => {
        if (error) {
            callback("Unable to connect to internet 😠",undefined);
        }else if(body.features.length === 0){
            callback('Unable to find location. Try another search !',undefined)
        }else{
               callback(undefined,{
                    latitude : body.features[0].center[0],
                    longitude: body.features[0].center[1],
                    location: body.features[0].place_name
            })
    }
    
})
    
}

module.exports = geocode;