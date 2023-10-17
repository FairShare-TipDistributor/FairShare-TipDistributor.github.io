
// Test data. This will come from client in deployed version
let tipsTotal = 300;
let nameAndHours = [
    {name:'Tim', hours:20},
    {name:'Tod', hours:20},
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
     * @param {*} tipsTotal Total # of tips from input on client
     * @returns Returns number amount of each employees' share of tips
     */
    function calcTip (hoursTotal, empHours, tipsTotal) {
        let empShare = tipsTotal/hoursTotal * empHours
        return empShare
    }
    let employeeShare = [];
    let singleEmp = {};
    let hoursTotal = 0;
    // gets total hours from employees
    for (let employeeHours of nameAndHours) {
        hoursTotal += employeeHours.hours;
    }
    for (let employeeTips of nameAndHours) {
        singleEmp.name = employeeTips.name;
        singleEmp.tips = calcTip(hoursTotal, employeeTips.hours, tipsTotal);
        employeeShare.push(singleEmp);
    }
    return employeeShare
}

console.log(shareOfTips(tipsTotal, nameAndHours));

