// setTimeout(()=>{
//     console.log('Two seconds are up!')
// }, 2000)



// const names = ['Jess', 'Jen', 'Jefferson']
// const shortnames = names.filter((name)=> {
//     return name.length<=4
// })
// console.log(shortnames)




//sa grecinq vor bacatrenq vor qani vor callbacki jamanak return vochmiban chi anum, functiony kancheluc
//mer mot datan talis a undefined, aysinqn dra hamar returny chi ashxatum asyncron functionneri jmk
//dra hamar ogtagortselu enq callbacky
// const geocode = (address, callback) => {
//     setTimeout(()=>{
//         const data ={
//             latitude: 0,
//             longitude: 0
//         }
//
//         return data
//     }, 2000)
// }
//
// const data = geocode('Philadelphia')
// console.log(data)
//aysinqn mer mainy minchev chverjana mer settimeouty chi ashxatelu u return chi anelu



//hima ogtagortsenq callbacky
// const geocode = (address, callback) => {
//     setTimeout(()=>{
//         const data ={
//             latitude: 0,
//             longitude: 0
//         }
//
//         callback(data)
//     }, 2000)
// }
//
// geocode('Philadelphia', (dataIncallback) => {
//     console.log(dataIncallback)
// })




// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (x,y,sumCallback)=>{
    setTimeout(()=>{
        sumCallback(x+y)
    },2000)
}

const sumCallback = (sum) => {
    console.log(sum)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

