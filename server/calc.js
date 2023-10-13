


// share = totalTips/totalHoursWorked x individualHoursWorked
let tipsTotal = 300;
let hoursTotal = 40;
let nameAndHours = [
    {name:'Tim', hours:20},
    {name:'Tod', hours:20},
]

function shareOfTips (tipsTotal, nameAndHours) {
    let employeeShare = [];
    let hoursTotal;
    for (let hours of nameAndHours) {
        hoursTotal += nameAndHours.hours
    }
    return hoursTotal;
}

console.log(shareOfTips(tipsTotal, nameAndHours));