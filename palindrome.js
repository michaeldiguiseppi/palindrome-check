// function palindrome(string) {
//     var newString = string.split('').reverse().join('');

//     if (newString.toLowerCase() === string.toLowerCase()) {
//         console.log("The string " + string + " is a palindrome.");
//     }
//     else {
//         console.log("The string " + string + " is not a palindrome.");
//     }
// };

// palindrome("Able was I, err I saw elba");



function palindrome(string) {
    var cleanString = '';

    for (var x = 0; x < string.length; x++) {
        cleanString += string.charAt(x).replace(/[\W_]+/g,'');
    }

    var newString = [];
    var stringArr = cleanString.split('');


    for (var i = stringArr.length; i >= 0; i--) {
        newString.push(stringArr[i]);
        var myString = newString.join('');
    };

    if (myString.toLowerCase() === cleanString.toLowerCase()) {
        console.log("The string " + string + " is a palindrome.");
    }
    else {
        console.log("The string " + string + " is not a palindrome.");
    };
}

palindrome("palindrome");
palindrome("racecar");
palindrome("Able was I, ere I saw Elba");
palindrome("Are Mac ‘n’ Oliver ever evil on camera?")