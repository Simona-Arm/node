const request = require('postman-request')

// The callback function for GEOCODE
const geocode = (address, callback) => {
    const locUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoic2ltb255YW4tYXJtaW5lIiwiYSI6ImNrbjd4MDd3azA0azYycHBkaGE1bWp1OG8ifQ.vpJmd5Oh_OwR_4u2ymtUAQ&limit=1'

    request({url: locUrl, json: true}, (error, response) => {

        if(error){
            callback('Unable to connect MapBox service!',undefined) //we are returning error so that developers can use geocode and not only console log but use the error or data as they want
        }else if(response.body.features.length == 0){ //kam lengthy 0 a
            callback('Unable to find location!',undefined)
        }else{
            callback(undefined,{
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                name: response.body.features[0].place_name,
            })
            // const latitude = response.body.features[0].center[1]
            // // const logintude = response.body.features[0].center[0]
            // // console.log(latitude+', '+logintude)
        }
    })

}

module.exports = geocode