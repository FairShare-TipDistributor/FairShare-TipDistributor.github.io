// Dinero handles cent differential
const Dinero = require('dinero.js');

// Test data. This will come from client in deployed version
//! DINERO AMOUNTS ARE IN CENTS
const tipsTotal = Dinero({amount: 666223, currency:'USD'});
let nameAndHours = [
    {name:'Tim', hours:3},
    {name:'Allen', hours:3},
    {name:'Bob', hours:3},
    {name: 'Lenny', hours: 3},
    {name: 'Brendan', hours: 3},
];

/**
 * 
 * @param {*} tipsTotal Total amount of tips from client
 * @param {*} nameAndHours array of objects containing employee name and hours worked
 * @returns Returns object with employee names and their share of tips
 */
function shareOfTips (tipsTotal, nameAndHours) {
    let employeeShare = [];
    let hoursTotal = 0;
    let shuffledNameAndHours = nameAndHours.sort( () => Math.random() - 0.5);

    // gets total hours from employees
    for (let employeeHours of nameAndHours) {
        hoursTotal += employeeHours.hours;
    }

    // adds each employee and their share of total tips to an array
    for (let employeeTips of shuffledNameAndHours) {
        employeeShare.push({
            name: employeeTips.name,
            tips: calcTip(hoursTotal, employeeTips.hours, tipsTotal)
        });
    }
    return employeeShare
}

function calcTip (hoursTotal) {
    let allocations = [];
    let i = 0;
    // Adds each employee's time as percentage of total time to allocations array
    for (let employee of nameAndHours) {
        allocations.push(employee.hours/hoursTotal * 100);
    }
    // Allocates tips based on percentage of total hours
    let payout = tipsTotal.allocate(allocations);

    // Adds payout to nameAndHours
    while (i < payout.length) {
        nameAndHours[i].share = payout[i].getAmount();
        i++;
    }
}

calcTip(15);

// console.log(nameAndHours.sort( () => Math.random() - 0.5) );

