// Dinero handles cent differential by using Bankers/Half Even rounding
const Dinero = require('dinero.js');

// Test data. This will come from client in deployed version
//! DINERO AMOUNTS ARE IN CENTS
const tipsTotal = Dinero({amount: 1003, currency:'USD'});
let nameAndHours = [
    {name:'Tim', hours:3},
    {name:'Allen', hours:3},
    {name:'Bob', hours:3},
    {name: 'Lenny', hours: 3},
    {name: 'Brendan', hours: 3},
]

/**
 * 
 * @param {*} tipsTotal Total amount of tips from client
 * @param {*} nameAndHours array of objects containing employee name and hours worked
 * @returns Returns object with employee names and their share of tips
 */
function shareOfTips (tipsTotal, nameAndHours) {
    /**
     * 
     * @param {number} hoursTotal total # of hours worked (derived in for loop)
     * @param {number} empHours hours the individual employee worked
     * @param {number} tipsTotal Total # of tips from input on client as Dinero Object
     * @returns Returns number amount of each employees' share of tips
     */
    function calcTip (hoursTotal, empHours, tipsTotal) {
        let percent = empHours/hoursTotal * 100;
        let empShare = tipsTotal.percentage(percent);
        return empShare.getAmount()/100;
    }
    let employeeShare = [];
    let hoursTotal = 0;
    // gets total hours from employees
    for (let employeeHours of nameAndHours) {
        hoursTotal += employeeHours.hours;
    }
    // adds each employee and their share of total tips to an array
    for (let employeeTips of nameAndHours) {
        employeeShare.push({
            name: employeeTips.name,
            tips: calcTip(hoursTotal, employeeTips.hours, tipsTotal)
        });
    }
    return employeeShare
}

// console.log(shareOfTips(tipsTotal, nameAndHours));


// const testDinero = Dinero({amount: 1000, currency:'USD'});

// let testOutput = testDinero.allocate([1/3, 1/3, 1/3]);

// console.log(testOutput[0].getAmount());
// console.log(testOutput[1].getAmount());
// console.log(testOutput[2].getAmount());

function calcTip (hoursTotal) {
    let allocations = [];
    let i = 0;
    for (let employee of nameAndHours) {
        allocations.push(employee.hours/hoursTotal * 100);
    }
    let payout = tipsTotal.allocate(allocations);
    while (i < payout.length) {
        console.log(payout[i].getAmount());
        i ++;
    }
}

calcTip(15);