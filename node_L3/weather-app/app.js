const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'http://api.weatherstack.com/current?access_key=6e10bde51ccb31505dd984c26a2469a8&query=37.8267,-122.4233&units=f'

// request({url: url}, (error, response) => {
//     // console.log(response)
//     const data = JSON.parse(response.body);
//     console.log(data.current)
// })

// adding json to the upper code
// request({url: url, json: true}, (error, response) => {
//     const currentTemperature = response.body.current
//     console.log(response.body.current.weather_descriptions +`. It is currently ${currentTemperature.temperature} degrees out. It feels like ${currentTemperature.feelslike} degrees out.`)
// })


// a task of geocoding
// const locUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2ltb255YW4tYXJtaW5lIiwiYSI6ImNrbjd4MDd3azA0azYycHBkaGE1bWp1OG8ifQ.vpJmd5Oh_OwR_4u2ymtUAQ&limit=1'
//
// request({url: locUrl, json: true}, (error, response) => {
//     const latitude = response.body.features[0].center[1]
//     const logintude = response.body.features[0].center[0]
//     console.log(latitude+', '+logintude)
// })


// error handling

// const url = 'http://api.weatherstack.com/current?access_key=6e10bde51ccb31505dd984c26a2469a8&query=37.8267,-122.4233&units=f'
//
// request({url: url, json: true}, (error, response) => {
//     // console.log(error)
//     //low level error, when error argument exist and the response doesn't
//     if(error){
//         console.log('Unable to connect WeatherStack service!') //turn off internet connection to see result
//     }else if(response.body.error){
//         console.log('Unable to find location!') //remove latitude and longitude from the url to see the result
//     }else{
//         const currentTemperature = response.body.current
//         console.log(response.body.current.weather_descriptions +`. It is currently ${currentTemperature.temperature} degrees out. It feels like ${currentTemperature.feelslike} degrees out.`)
//     }
//
// })


// Error handling task for geocoding
// const locUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2ltb255YW4tYXJtaW5lIiwiYSI6ImNrbjd4MDd3azA0azYycHBkaGE1bWp1OG8ifQ.vpJmd5Oh_OwR_4u2ymtUAQ&limit=1'
//
// request({url: locUrl, json: true}, (error, response) => {
//
//     if(error){
//         console.log('Unable to connect MapBox service!') //turn off internet connection to see result
//     }else if(response.body.features.length == 0){
//         console.log('Unable to find location!') //try a not existing address to see the result
//     }else{
//         const latitude = response.body.features[0].center[1]
//         // const logintude = response.body.features[0].center[0]
//         // console.log(latitude+', '+logintude)
//     }
//
// })

// The callback function for GEOCODE
// then move it to new file geocode.js
// geocode('Yerevan', (error, data) => {
//     console.log(error)
//     console.log(data)
// })


//geocoding + weather

// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(37.8267, -122.4233, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})