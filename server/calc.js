// Dinero handles cent differential by using Bankers/Half Even rounding
const Dinero = require('dinero.js');

// Test data. This will come from client in deployed version
//! DINERO AMOUNTS ARE IN CENTS
const tipsTotal = Dinero({amount: 56789, currency:'USD'});
let nameAndHours = [
    {name:'Tim', hours:10},
    {name:'Allen', hours:20},
    {name:'Bob', hours:5}
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

console.log(shareOfTips(tipsTotal, nameAndHours));
