// // ****************************** Chapter 21 - 25 ******************************

// // Task 1
// var firstName = prompt("Enter your first name?");
// var lastName = prompt("Enter your last name?");

// var fullName = firstName + " " + lastName;
// document.write("Your full name is : " + fullName);

// // Task 2
// var favPhone = prompt("Enter your favourite phone?");

// var strLength = favPhone.length;

// document.write("My favourite phone is: " + favPhone + "<br>");

// document.write("Length of String: " + strLength);

// // Task 3
// var str1 = "Pakistani";
// var getIndex1 = str1.indexOf("n")

// document.write("String : " + str1 + "<br>");
// document.write("Index of 'n' : " + getIndex1);

// // Task 4
// var str2 = "Hello World";
// var getIndex2 = str2.lastIndexOf("l")

// document.write("String : " + str2 + "<br>");
// document.write("Last Index of 'l' : " + getIndex2);

// // Task 5
// var str3 = "Pakistan";
// var getIndex3 = str3.charAt("3")

// document.write("String : " + str3 + "<br>");
// document.write("Character at Index 3 : " + getIndex3);

// // Task 6
// var firstName = prompt("Enter your first name?");
// var lastName = prompt("Enter your last name?");

// var fullName = firstName.concat(" " + lastName);
// document.write("Your full name is : " + fullName);

// // Task 7
// var city = "Hyderabad";
// var replaceStr = city.replace("Hyder", "Islam");

// document.write("City : " + city + "<br>");
// document.write("After replacement : " + replaceStr);

// // Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaceWord = message.replace(/and/g, "&");

// document.write("<b>Orignal Message</b> : " + message +  "<br>"); 
// document.write("<b>Replace and with & : </b> "  + replaceWord);

// // Task 9
// var str1 = "472";
// document.write("Value : " + str1 + "<br>");

// var beforeConvert = typeof(str1);
// document.write("Type : " + beforeConvert + "<br>");

// var convertStrtoNum = parseInt(str1);
// document.write("Value : " + convertStrtoNum + "<br>");

// var afterConvert = typeof(convertStrtoNum);
// document.write("Type : " + afterConvert + "<br>");

// // Task 10
// var usrInput1 = prompt(" Enter something... ?");
// document.write("User input : " + usrInput1 + "<br>");

// var convertUppercase = usrInput1.toUpperCase();
// document.write("Upper case : " + convertUppercase);

// // Task 11
// var usrInput2 = prompt(" Enter something... ?");
// document.write("User input : " + usrInput2 + "<br>");

// var firstChar = usrInput2.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = usrInput2.slice(1);
// otherChar = otherChar.toLowerCase();
// var finalCase = firstChar + otherChar;
// document.write("Title case : " + finalCase);

// // Task 12
// var num = 35.36;
// num = num.toString();
// var splitNum = num.split('.').join("");
// document.write("Number : " + num + "<br>");
// document.write("Result : " + splitNum);

// // Task 13
// var username = prompt("Enter your username?");
// for (var i = 0; i < username.length; i++) {
//     var check = username.charCodeAt(i);
//     if (check == 33 || check == 64 || check == 44 || check == 46) {
//         alert("Please enter valid username");
//         break;
//     }
// }

// // Task 14
// document.write("<br><br>");
// var A = ["cake", "apple pie", "cookie", "chips", "paties"];
// var search =  prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");
// search = search.toLowerCase();
// var findIndex;

// for (var i=0; i < search.length; i++) {
//     findIndex = A.indexOf(search);
//     if (search === A[i]) {
//         document.write(search + " is <b>available</b> at index " + findIndex + " in our bakery");
//         break;
//     }
// }

// if (search != A[i]) {
//     document.write("We are sorry " + search + " is <b>not available</b> in our bakery");
// }

// // Task 15
// var password = prompt("Enter your password?");
// document.write("Entered password : " + password + "<br>");

// for (var i = 0; i < password.length; i++) {
//     var checkChar = password.charCodeAt(i);

//     if (checkChar >= 33 && checkChar <= 47 || checkChar == 64) {
//         document.write("Please enter only numbers and letters" + "<br>" + "Please enter a valid password");
//         break;
//     }
//     else if (parseInt(password)) {
//         document.write("Password should not start with number" + "<br>" + "Please enter a valid password");
//         break;
//     } else if ( password.length <= 6 ) {
//         document.write("Password should be 6 characters long" + "<br>" + "Please enter a valid password");
//         break;
//     } else {
//         document.write("Perfect! Your passowrd is correct");
//         break;
//     }
// }

// // Task 16
// var university = "University of Karachi";
// var convert = university.split('');

// for (var i = 0; i < convert.length; i++) {
//     document.write("<br>" + convert[i]);
// }

// // Task 17
// var country = prompt("Enter country name?");
// var lastChar = country[country.length -1];
// document.write("User input : " + country + "<br>");
// document.write("Last character of  input : " + lastChar);

// // Task 18
// var str = "The quick brown fox jumps over the lazy dog";
// var convertCase = str.toLowerCase();
// var count = (convertCase.match(/the/g) || []).length;
// document.write("Text: " + str + "<br>");
// document.write("There are " + count + " occurrence(s) of the word 'the' ");








// // ****************************** Chapter 26 - 30 ******************************

// // Task 1
// var getInput = +prompt("Enter positive integer?");
// var roundOff = Math.round(getInput);
// var floorValue = Math.floor(getInput);
// var ceilValue = Math.ceil(getInput);

// document.write("number : " + getInput + "<br>");
// document.write("round off value : " + roundOff + "<br>");
// document.write("floor value : " + floorValue + "<br>");
// document.write("ceil value : " + ceilValue  + "<br>");

// // Task 2
// var getInput = +prompt("Enter negative floating point number?");
// var roundOff = Math.round(getInput);
// var floorValue = Math.floor(getInput);
// var ceilValue = Math.ceil(getInput);

// document.write("number : " + getInput + "<br>");
// document.write("round off value : " + roundOff + "<br>");
// document.write("floor value : " + floorValue + "<br>");
// document.write("ceil value : " + ceilValue  + "<br>");

// // Task 3
// var getNum = +prompt("Enter number to find its absolute value?");
// var getAbsoluteValue = Math.abs(getNum);

// document.write("The absolute value of : " + getNum + " is " + getAbsoluteValue + "<br>");

// // Task 4
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write("Random dice value : " + diceRoll);

// // Task 5
// var toss = Math.random() * 2;
// var floor = Math.floor(toss);
// var name;

// if (floor === 0 ) {
//     name = "Heads";
//     document.write("random coin value : " + name);
// } else {
//     name = "Tails";
//     document.write("random coin value : " + name);
// }

// // Task 6
// var num = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100 : " + num);

// // Task 7
// var weight = prompt("Enter your weight in kilograms?");
// var getIntfromStr = parseFloat(weight);
// document.write("The weight of user is " + getIntfromStr + " kilograms");

// // Task 8
// var secretNum = 6
// var userSecretNum = +prompt("Enter your number from 1 to 10?");

// if (userSecretNum === secretNum) {
//     alert("Congrats! your number is correct");
// } else {
//     alert("Sorry! Try again!");
// }








// // ****************************** Chapter 31 - 34 ******************************

// // Task 1
// var getCurrentDate = new Date();
// document.write(getCurrentDate);

// // Task 2
// var months = ["January", "February", "March", "April", "May", "June","July","August","September","October", "November", "December"];
// var getCurrentDate = new Date();
// var getCurrentMonth = getCurrentDate.getMonth();
// var nameOftheMonth = months[getCurrentMonth];
// alert("Current month: " + nameOftheMonth);

// // Task 3
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var getDate = new Date();
// var getCurrentDay = getDate.getDay();
// var getNameofDay = days[getCurrentDay];
// var getFirstThreeLetters = getNameofDay.slice(0, 3);
// alert("Today is " + getFirstThreeLetters);

// //Task 4
// var today = new Date();
// if (today.getDay() == 0 || today.getDay() == 6) {
//     alert("It's Fun day");
// } else {
//     alert("It's normal day");
// }

// // Task 5
// var date = new Date();

// if (date.getDate() < 15) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

// // Task 6
// var date = new Date();
// var elapsedMilliseconds = date.getTime();
// var elapsedMinutes = elapsedMilliseconds / 60000;
// document.write("Current Date :  " + date + "<br>");
// document.write("Elapsed Milliseconds since January 1, 1970: " + elapsedMilliseconds + "<br>");
// document.write("Elapsed Minutes since January 1, 1970: " + elapsedMinutes + "<br>");

// // Task 7
// var date = new Date();
// var hours = date.getHours();

// if (hours >= 12) {
//     alert("It's PM");
// } else {
//     alert("It's AM");
// }

// // Task 8
// var date = new Date();
// date.setDate(0);
// document.write("Later date: " + date);

// // Task 9
// var calc = 24 * 60 * 60 * 1000;
// var todayDate = new Date();
// var lastRamadanDate = new Date('June 18, 2015');
// var diff = Math.floor(Math.abs((lastRamadanDate - todayDate) / calc));
// document.write(diff  + " days have passed since 1st Ramadan, 2020");

// // Task 10
// var referanceDate = new Date("Dec 05, 2015 22:50:16");
// var yearBeginning = new Date("Jan 01, 2015 00:00:00");
// var diff = referanceDate.getTime() - yearBeginning.getTime();
// var getsec =  diff /1000

// document.write("On reference date: " + referanceDate + "<br>");
// document.write(getsec + " had passed since beginning of 2015");

// // Task 11
// var currentDate = new Date();
// document.write("Current Date: " + currentDate + "<br>");
// currentDate.setHours(currentDate.getHours() - 1);
// document.write("1 hour ago, it was " + currentDate);

// // Task 12
// var currentDate = new Date();
// document.write("Current Date: " + currentDate + "<br>");
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// document.write("100 years back, it was " + currentDate);

// // Task 13
// var userAge = new Date (prompt("Enter your age?, E.g: Jan 1, 1970"));
// var dobmili = userAge.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accAge = Math.floor(diff / (1000*60*60*24*30*12));
// var getBirthYear = userAge.getFullYear();
// document.write("Your age is: " + accAge + "<br>");
// document.write("Your birth year is: " + getBirthYear);

// // Task 14
// var getCustomerName = prompt("Enter customer name?");
// var getCurrentMonth = prompt("Enter current month?");
// var numofUnits = +prompt("Enter units?");
// var chargesPerUnit = +prompt("Enter charges per unit?");
// var netAmount =  numofUnits * chargesPerUnit;
// var latePaymentSurcharge = +prompt("Enter late payment surcharge?");
// var grossAmountPayable = netAmount + latePaymentSurcharge;

// document.write("<h1>K-ELectric Bill</h1>" + "<br>");
// document.write("Customer Name: " + "<b>" + getCustomerName + "</b>" + "<br>");
// document.write("Current Month: " + "<b>" + getCurrentMonth + "</b>" + "<br>");
// document.write("Number of Units: " + "<b>" + numofUnits + "</b>" + "<br>");
// document.write("Charges per Unit " + "<b>" + chargesPerUnit+ "</b>" + "<br>");
// document.write("Net amount payable (within Due Date): " + "<b>" + netAmount + "</b>" + "<br>");
// document.write("Late payment surcharge:  " + "<b>" + latePaymentSurcharge + "</b>" + "<br>");
// document.write("Gross amount payable (after Due Date): " + "<b>" + grossAmountPayable + "</b>");








// // ****************************** Chapter 35 - 38 ******************************

// // Task 1
// function displayCurrentDateTime () {
//     var date = new Date();
//     document.write(date);
// }
// displayCurrentDateTime();

// // Task 2
// function greetUser (firstName, lastname) {

//     firstName = prompt("Enter first name?");
//     lastname = prompt("Enter last name?");
//     var fullName = firstName + " " + lastname;
//     document.write("Hello! " + fullName);
// }
// greetUser();

// // Task 3
// function returnSum (num1, num2, sum) {
//     num1 = +prompt("Enter number 1?");
//     num2 = +prompt("Enter number 2?");
//      return sum = num1 + num2;
// }
// document.write(returnSum());


// // Task 4
// function calculator (num1, operator, num2,) {
//     if (operator === "+") {
//         return num1 + num2;
//     } else if (operator === "-") {
//         return num1 - num2;
//     } else if (operator === "*") {
//         return num1 * num2;
//     }else if (operator === "/") {
//         return num1 / num2;
//     } else {
//         return "Incorrect Operator!";
//     }
// }
// var resultSum = calculator(5,"+",5);
// var resultMinus = calculator(5,"-",5);
// var resultMultiply = calculator(5,"*",5);
// var resultDivide = calculator(5,"/",5);

// document.write("Sum: " + resultSum + "<br>");
// document.write("Minus: " + resultMinus + "<br>");
// document.write("Multiply: " + resultMultiply + "<br>");
// document.write("Divide: " + resultDivide + "<br>");

// // Task 5
// function getSquare(num) {
//     return Math.sqrt(num);
// }
// document.write("Square root: "  + getSquare(5));

// // Task 6
// function findFactorial(num) {
//     var comp = 1;
//     for (var i = 2; i <= num; i++)
//         comp = comp * i;
//     return comp;
// }
// console.log(findFactorial(5));

// // Task 7
// function counting(start, end) {
//     start = +prompt("Enter number from which you want to start counting?");
//     end = +prompt("Enter the number up to which you want to end the counting?");
//     var text = "";
//     for (var i = start; i <= end; i++) {
//         text += i + ' ';
//         }
//         return text.slice(0, -1);
// }
// document.write(counting());

// // Task 8
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare() {
//         var hypotenuse = Math.sqrt(base * base + perpendicular * perpendicular);
//         return "Hypotenuse of right angle triangle is: " + hypotenuse;
//     }
//     base = +prompt("Enter base to calculate hypotenuse of a right angle triangle?");
//     perpendicular = +prompt("Enter Perpendicular to calculate hypotenuse of a right angle triangle?");

//     return calculateSquare();
// }
// document.write(calculateHypotenuse());

// // Task 9
// function findAreaofTriangle(width, height) {
//     var A = (width * height) / 2;
//     return A;
// }
// document.write("Area of Triangle: " + findAreaofTriangle(10,5));

// // Task 10
// function isPalindrome(word) {
//     word = word.toLowerCase();
//     var i, wLength = word.length - 1, wLengthToCompare = wLength / 2;

//     for (i = 0; i <= wLengthToCompare; i++) {
//         if (word.charAt(i) != word.charAt(wLength - i)) {
//             return word + " is not Palindrome";
//         }
//     }
//     return word + " is Palindrome";
// }
// document.write(isPalindrome("Madam"));

// // Task 11
// function convertToUpperCase(str) {

//     document.write("EXAMPLE STRING: " + str + "<br>");
//     var word = str.toLowerCase().split(' ');
//     for (var i = 0; i < word.length; i++) {
//         var subString = word[i].split('');
//         for (var j = 0; j < subString.length; j++) {
//             subString[0] = subString[0].toUpperCase();
//         }
//         word[i] = subString.join('');
//     }

//     return document.write("EXPECTED OUTPUT: " + word.join(' '));
// }
// convertToUpperCase("hello my name is umer waqas and i live in fulda");

// // Task 12
// function longestWord(string) {
//     document.write("EXAMPLE STRING: " + string + "<br>");
//     var str = string.split(" ");
//     var longestWord = 0;
//     var word = null;
//     for (var i = 0; i < str.length; i++) {
//         if (longestWord < str[i].length) {
//             longestWord = str[i].length;
//             word = str[i];
//         }
//     }
//     return document.write("EXPECTED OUTPUT: " + word);
// }
// longestWord("The quick brown fox jumped over the lazy dog");

// // Task 13
// function findOccurrences(str, letter) {
//     var count = 0;
//     for (var position = 0; position < str.length; position++) {
//         if (str.charAt(position) == letter) {
//             count += 1;
//         }
//     }
//     return document.write("There are " + count + " occurrence(s) of the word " + "<b> '" + letter + "'</b>");
// }
// findOccurrences('w3resource.com', 'o');

// // Task 14
// function calcCircumference(radius) {
//     circumferenceOfCircle  = 2 * Math.PI * radius;
//     return document.write("The circumference is: " + circumferenceOfCircle.toFixed(2) + "<br>");
// }
// calcCircumference(12);

// function calcArea(radius) {
//     areaOfCircle = radius * radius * Math.PI.toFixed(2);
//     return document.write("The Area is: " + areaOfCircle);

// }
// calcArea(5);
