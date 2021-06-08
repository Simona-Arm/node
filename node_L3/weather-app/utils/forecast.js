const request = require('postman-request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6e10bde51ccb31505dd984c26a2469a8&query='+lat+','+lon+'&units=f'

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect WeatherStack service!', undefined)
        }else if(response.body.error){
            callback('Unable to find location!', undefined)
        }else{
            callback(undefined, {
                description: response.body.current.weather_descriptions,
                temperature: response.body.current.temperature,
                feelsLike: response.body.current.feelslike
            })
        }
    })
}

module.exports = forecast;