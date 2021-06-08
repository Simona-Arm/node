const square = function(x){
    return x*x;
}

console.log(square(4))

let newArr = {
    N1: 100,
    N2: 200,
    N3: 300
}

// LOOPS
// for loop
// for(let i=0; i<30; i++){
//     console.log(i);
// }

// for ...in loop
// for(let prop in newArr){
//     console.log(prop)
//     console.log(newArr[prop])
// }

// newArr = [100,200,300]
//
// // for ...of loop
// for(let val of newArr){
//     console.log(val)
// }

// let num = 5;
// let sum = 0;

// while(num <10){
//     sum += num;
//     num += 1;
// }
// console.log(sum);

// do{
//     sum += num;
//     num += 1;
// }while(num <10)
// console.log(sum);
// break-y loopic durs a galis
// continue-n et ptuyti gortsoxutyuny bac a toxnum u ancnum a hajord ptuytin

// const arrowFunctionSqure = (x) =>{
//     return x*x;
// }
// console.log(arrowFunctionSqure(5))
//
// const shortarrowFunctionSquare = x => x*x;
// console.log(shortarrowFunctionSquare(8))


// normal function
// const event = {
//     name: 'BDay party',
//     printGuestList: function(){
//         console.log('Guest list for' + this.name)
//     }
// }
//
// event.printGuestList();

// arrow function
// const event = {
//     name: 'BDay party',
//     printGuestList: () => console.log('Arrow function: Guest list for' + this.name)
// }
//
// event.printGuestList();
//arrow functiony myusi nman thisy chi vercnum aysinqn method grelu hamar harmar chi

// karch grelu dzev, ES6 eli, methodi hamar, sa sovorakan functiona, u thisy es depqum vercnum a
const event = {
    name: 'BDay party',
    guestList: ['Armine', 'Simona', 'unknownguest'],
    printGuestList(){
        console.log('Arrow function: Guest list for' + this.name) //estex thisy vercrec
        this.guestList.forEach((guest) => { //stex mez thisy petq chi
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList();