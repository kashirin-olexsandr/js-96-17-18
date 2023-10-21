// ~У змінній min лежить число від 0 до 59.
//~ Визначте, в яку чверть години потрапляє
//~ це число(у першу, другу, третю чи четверту).

function getQuarter(min) {
    if (min > 0 && min <= 15) {
        return "Quarter first";
    } else if (min > 15 && min <= 30) {
        return "Quarter second";
    } else if (min > 30 && min <= 45) {
        return "Quarter third";
    } else if (min > 45 && min <= 59) {
        return "Quarter fourth";
    } else {
        return "Quarter is not found";
    }
}

console.log(getQuarter(35));
console.log(getQuarter(10));
console.log(getQuarter(59));
console.log(getQuarter(62));