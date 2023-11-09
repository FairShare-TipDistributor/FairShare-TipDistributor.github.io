// Dinero handles cent differential
const Dinero = require('dinero.js');

// Test data. This will come from client in deployed version
//! DINERO AMOUNTS ARE IN CENTS
const tipsTotal = Dinero({amount: 10000, currency:'USD'});
let nameAndHours = [
    {name:'Tim', id: 1, hours:3},
    {name:'Allen', id: 2, hours:2},
    {name:'Bob', id: 3, hours:4},
    {name: 'Lenny', id: 4, hours: 10},
    {name: 'Brendan', id: 5, hours: 1.6},
];

/**
 * 
 * @param {*} tipsTotal Total amount of tips from client
 * @param {*} nameAndHours array of objects containing employee name and hours worked
 * @returns Returns object with employee names and their share of tips
 */
function shareOfTips (tipsTotal, nameAndHours) {
    let hoursTotal = 0;
    // Shuffles array to give remainder randomly
    let shuffledNameAndHours = nameAndHours.sort( () => Math.random() - 0.5);

    // gets total hours from employees
    for (let employeeHours of shuffledNameAndHours) {
        hoursTotal += employeeHours.hours;
    }
    // Adds total hours to array of objects
    shuffledNameAndHours.totalHours =  hoursTotal;

    // adds each employee and their share of total tips to an array
    let allocations = [];
    let i = 0;
    // Adds each employee's time as percentage of total time to allocations array
    for (let employee of shuffledNameAndHours) {
        allocations.push(employee.hours/hoursTotal * 100);
    }
    // Allocates tips based on percentage of total hours
    let payout = tipsTotal.allocate(allocations);
    
    // Adds payout to nameAndHours
    while (i < payout.length) {
        nameAndHours[i].share = payout[i].getAmount()/100;
        i++;
    }
        console.log(shuffledNameAndHours);
    
    return shuffledNameAndHours;
}

shareOfTips(tipsTotal, nameAndHours);




