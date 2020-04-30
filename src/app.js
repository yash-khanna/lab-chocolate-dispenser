// "green", "silver", "blue", "crimson", "purple", "red", "pink"
var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

function addChocolates(chocolates, color, count) {
    if (count <= 0 || color == "") {
        return "Number cannot be zero/negative";
    }
    for (let i = 0; i < count; i++) {
        chocolates.unshift(color);
    }
    return chocolates;
}


//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates, number) {
    if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    }
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    let a = []
    for (let i = 0; i < number; i++) {
        let p = chocolates.shift();
        a.push(p);
    }
    return a;
}


//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates, number) {
    let a = [];
    if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    }
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    for (let i = 0; i < number; i++) {
        p = chocolates.pop();
        a.push(p);
    }
    return a;
}


//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, number, color) {
    let a = [];
    if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    }
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    let i = 0;
    while (i < number) {
        p = chocolates.pop();
        if (p == color) {
            a.push(p);
            i++;
        }
    }
    return a;
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates) {
    let b = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];
    let a = [];
    for (let i = 0; i < b.length; i++) {
        c = b[i];
        let number = chocolates.filter(function (num) {
            if (num == c) {
                return num;
            }
        });
        if (number.length != 0) {
            a.push(number.length);
        }
    }
    return a;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
    return chocolates.sort(function (a, b) {
        return a.length - b.length;
    });
}



//Progression 7: Change ___ chocolates of ____ color to ____ color

function changeChocolateColor(chocolates, number, color, finalColor) {
    let i = 0;
    let j = 0;
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    if (color == finalColor) {
        return "Can't replace the same chocolates";
    }
    while (i < chocolates.length && j < number) {
        if (chocolates[i] == color) {
            chocolates[i] = finalColor;
            j++;
        }
        i++;
    }
    return chocolates;
}
//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
var candies = ["green", "green", "blue", "blue"];

function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
    let i = 0;
    let j = 0;
    let a = [];
    let num = 0;
    if (color == finalColor) {
        return "Can't replace the same chocolates";
    }
    while (i < chocolates.length) {
        if (chocolates[i] == color) {
            chocolates[i] = finalColor;
            j++;
        }
        i++;
    }
    a = chocolates.filter(color => color == finalColor);
    let b = a.length;
    let c = [];
    c.push(b);
    c.push(a);
    return c;
}


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed