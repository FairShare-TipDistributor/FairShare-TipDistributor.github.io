/**
 * 
 * @param {*} tipsTotal Total amount of tips from client
 * @param {*} nameAndHours array of objects containing employee name, id, and hours worked
 * @returns Returns object with employee names and their share of tips
 */
function shareOfTips (tipsTotal, nameAndHours) {
    let hoursTotal = 0;
    // Shuffles array to give remainder randomly
    let shuffledNameAndHours = [];
    shuffledNameAndHours.employees = nameAndHours.sort( () => Math.random() - 0.5);

    // gets total hours from employees
    for (let employeeHours of shuffledNameAndHours.employees) {
        hoursTotal += employeeHours.hours;
    }
    // Adds total hours to array of objects
    shuffledNameAndHours.totalHours =  hoursTotal;

    // adds each employee and their share of total tips to an array
    let allocations = [];
    let i = 0;
    // Adds each employee's time as percentage of total time to allocations array
    for (let employee of shuffledNameAndHours.employees) {
        allocations.push(employee.hours/hoursTotal * 100);
    }
    // Allocates tips based on percentage of total hours
    let payout = tipsTotal.allocate(allocations);
    
    // Adds payout to nameAndHours
    while (i < payout.length) {
        shuffledNameAndHours.employees[i].share = payout[i].getAmount()/100;
        i++;
    }
        console.log(shuffledNameAndHours);
    
    return shuffledNameAndHours;
}

module.exports = shareOfTips;






