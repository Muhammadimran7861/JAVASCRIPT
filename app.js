// //  "ch 21"
// q1
// var allLower = userInput.toLowerCase();



// 2
// var x = "HELLO WORLD !"
// x = x.toLowerCase();
// alert(x)

//   3

// var y = "hello world";
// y = y.toUpperCase();
// alert(y)

// 4


// var original= "Hello World";
// var lowerCase= original.toLowerCase();
// alert(lowerCase);


// 5
// var arr = ["Hello" ,"World"];
// var lowerCaseElement = arr[0].toLowerCase();
// alert(lowerCaseElement);

// 6
// let myString = "Hello World";
// alert(myString.toUpperCase());

// 7
// var cityName = "kaRacHi";
// var capitalized = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCa;
// alert(capitalized);


    //  ch 22
// let sameWords = "captain";
// let sliced = sameWords.slice(1, 3);
// alert(sliced);

// 2
// var str = "Hello, world!";

// 3
// The string "elephant" has been assigned to the variable animal. 
// Slice the four middle characters out of the string and assign it to 
// the variable seg, which hasn't been declared beforehand.

// var animal = "elephant"
// var seg = animal.slice(2,6);
// alert(seg);


// . Find the number of characters in the string represented by a 
// variable and assign the number to a second variable


// var str = "Hello, world!";
// var characterCount = str.length;

// console.log(characterCount);



// . In a first statement measure how many characters there are in a 
// string represented by a variable. In a second statement slice all 
// but the first character and last 3 characters of the string and 
// assign it to a second variable that hasn't been declared 
// beforehand

// var str = "Hello, world!";
// var Count = str.length;
// var slicedStr = str.slice(1,Count - 3);

// console.log(Count);
// console.log(slicedStr);

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?
// var text = "To be or not to be.";
// var indx = text.indexOf("be");// 3
// alert(indx)



// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
//  output is  16


// . Find the index of the first character of the last instance of "go" in 
// the string represented by the variable text and assign the number 
// to the variable indx, which hasn't been declared beforehand.

// var text = "Let it go, let it go";
// var searchStr = "go";
// var lastIndex = text.lastIndexOf(searchStr);
// var indx =  lastIndex!= 20

// console.log(indx);

// Code the first line of an if statement that tests whether a segment 
// with an index represented by indexNum exists in a string

// var str = "Hello, world!";
// var indexNum = 6;
// if (str.charAt(indexNum) !== '') {
//   console.log("Segment exists at index " + indexNum);
// } else {
//   console.log("Segment does not exist at index " + indexNum);
// }


// In this string "abcde", what character is at index 2? (Use 
//     charAt)

// var str = "abcde"
// var index = str.charAt(2)
// alert(index)



// Find the 10th character in the string represented by text and 
// assign it to the variable cha, which hasn't been declared 
// beforehand.

// var text = "Hello, world!";
// var cha = text.charAt(9);

// console.log(cha);


// Find the last character in the string represented by str and 
// assign it to x, which hasn't been declared beforehand

// var str = "hello basit"
// var x = str.charAt(str.length -1)
// alert(x)

// Find the the 5th character in a string represented by input 
// and assign it to cha, which hasn't been declared beforehand.
// var input = "helloo"
// var cha = input.charAt(5)
// alert(cha);


// Code the first line of an if statement that tests whether the 
// 3rd character of a string represented by a variable is a particular 
// character.

// var str = "Hello, world!";
// var specificChar = "l";

// if (str.charAt(2) === specificChar) {
//   console.log("The 3rd character is '" + specificChar + "'");
// } else {
  
//   console.log("The 3rd character is not '" + specificChar + "'");
// }


// Code a for loop that cycles through all the characters of a 
// string represented by a variable and assigns each character to an 
// element of an array that has been declared beforehand.
// In the string represented by reply replace the first instance of "no" 
// with "yes" and assign the revised string to revisedReply, which hasn't 
// been declared beforehand.


// var str = "Hello, world!";
// var charArray = [];

// for (var i = 0; i < str.length; i++) {
//   var currentChar = str.charAt(i);
//   charArray.push(currentChar);
// }

// console.log(charArray);

// var reply = "No, thank you.";
// var revisedReply = reply.replace("no", "yes");

// console.log(revisedReply);

// In a string represented by str replace the first instance of "1" 
// with "one" and assign the revised string to newStr, which hasn't 
// been declared beforehand.

// var str = "1st place!";
// var newStr = str.replace("1", "one");
// console.log(newStr);

// var x = "apple, banana, orange";
// var y = x.replace(/a/g, "z");
// console.log(y);



//            26

// var number = 3.7;
// var roundedNumber = Math.round(number);


// Round up a number represented by origNum and assign it to 
// roundNum, which hasn't been declared beforehand.

// origNum = 2.33
// var roundNum = Math.round(origNum);
// alert(roundNum)

// var origNum = 5.8;
// var roundNum = Math.floor(origNum);

// console.log(roundNum);


// Round a number represented by a variable and assign the result 
// to a second variable that hasn't been declared beforehand.

// var a = 2.5;
// var b = Math.round(a)
// alert(b)

// . Round .5 to 0 and assign it to a variable that hasn't been declared 
// beforehand

// var c = .5
// var d = Math.floor(c)
// alert(d)




// var randomNum = Math.random();
// var convert = Math.floor(randomNum * 50) + 1;

// console.log(convert);

// Generate a random number and assign it to a variable that hasn't 
// been declared beforehand.

// var a = Math.random()
// alert (a)

// var diceNumber = Math.floor(Math.random() * 6) + 1;
// console.log("Dice number:", diceNumber);

// var randomNum = Math.random();
// var tossResult = randomNum < 0.5 ? 'Heads' : 'Tails';
// console.log("Toss result:", tossResult);


//    ch 28

// let str = "42";
// let num = parseInt(str);
// console.log(num);


// function convert(str) {
//   return Number(str);
// }
// var string= "123";
// var convertedNumber = convert(string);
// console.log(convertedNumber);


// let str = "3.14";
// let floatNum = Number(str);
// console.log(floatNum); 


// function isConvert(str) {
//   if (/^-?\d+$/.test(str)) {
//     return true;
//   }

//   if (/^-?\d+(\.\d+)?$/.test(str)) {
//     return true;
//   }

//   return false;
// }

// let str1 = "42";
// console.log(isConvertibleToNumber(str1)); // Output: true

// let str2 = "3.14";
// console.log(isConvertibleToNumber(str2)); // Output: true

// let str3 = "abc";
// console.log(isConvertibleToNumber(str3)); // Output: false

// 5. How can you convert a number to a string in JavaScript?
// var num = 20
// var str = num.toString()
// alert(str)



// function tostring(number){
//     return number.toString()
// }
// var num = 42;
// var convert = tostring(num)
// alert(convert)


// Can you convert a string representing a decimal number (e.g., 
// "3.14") to an integer in JavaScript? If so, how?

// var str = 3.14
// var int = parseInt(str);
// console.log(int)


// var  num = 3.141592653589793;
// var newNum = num.toFixed(4).toString();



// let num = 3.141592653589793;
// num = Number(num.toFixed(2).toString());

// if (num.toFixed(2).toString().length > 4) {
// }


// var num = 2.111111
// var assign = num.toFixed(2).toString()
// alert(assign)

//    ch 31
// let dObj = new Date();
// alert(dObj);

// let obj = new Date()
// let dStr = obj.toString()
// alert(dStr)


// . Code a statement that extracts the day of the week from a Date
// object represented by d and assigns it to day, which hasn't been
// declared beforehand.


// var a = new Date();

// var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var dayIndex = a.getDay();
// var day = dayNames[dayIndex];
// console.log(day);


// const d = new Date(); // Assuming you have a Date object named 'd'

// const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const dayIndex = d.getDay();
// const day = dayNames[dayIndex];

// alert(`Current day index: ${dayIndex}\nCurrent day: ${day}`);


// const currentDate = new Date(); // Assuming you have a Date object representing the current date and time

// const year = currentDate.getFullYear();
// const month = currentDate.getMonth() + 1; // Adding 1 to adjust for zero-based index
// const day = currentDate.getDate();
// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const seconds = currentDate.getSeconds();

// console.log(`Year: ${year}`);
// console.log(`Month: ${month}`);
// console.log(`Day: ${day}`);
// console.log(`Hours: ${hours}`);
// console.log(`Minutes: ${minutes}`);
// console.log(`Seconds: ${seconds}`);



// const later = new Date(2020, 11, 0);
// console.log(later);


// Create a Date object for the second day of the second month of
// 1992 and assign it to a variable that hasn't been declared
// beforehand

//   var a =new Date(1992,2,2)
//   console.log(a)


//   Code a single statement that displays in an alert the milliseconds
// that elapsed between the reference date and the beginning of
// 1980.

// alert(new Date(1980, 0, 1) - Date.now());


// let myDate = new Date(); 
// myDate.setFullYear(2023);
// alert (myDate)


// function change(date) {
//     date.setMonth(0);
//     return date;
// }  
//   let myDate = new Date(2023, 4, 15);
//   console.log(change(myDate));



//   let myDate = new Date(2023, 4, 15);
// let day = myDate.getDay();
// console.log(day)


// function change(time) {
//     let newMinutes = prompt("Enter the new value for minutes:");
//     time.setMinutes(newMinutes);
//     return time;
//   }
//   let myTime = new Date();
// console.log(change(myTime));



// function addHoursToTime(time, hoursToAdd) {
//     time.setHours(time.getHours() + hoursToAdd);
//     return time;
//   }
//   let myTime = new Date();
// console.log(addHoursToTime(myTime, 3));


// function calculateAge(birthdate) {
//     const now = new Date();
//     const birth = new Date(birthdate);
  
//     let age = now.getFullYear() - birth.getFullYear();
  
//     const monthDiff = now.getMonth() - birth.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
//       age--;
//     }
  
//     return age;
//   }
//   const birthdate = prompt("enter your dob");
//   const age = calculateAge(birthdate);
//   alert(age);
    
// function alert1(){
//     alert("hello world")
// }

// alert1()



// function askName() {
//     let userName = prompt("Enter name");
//     return userName;
//   }  
//   let name = askName();
//   console.log("Hello, " + name + "!");
  
// function callOtherFunctions() {
//     // Call the first function
//     firstFunction();
  
//     // Call the second function
//     secondFunction();
//   }
  
// function firstFunction() {
//     console.log("This is the first function.");
//   }
  
//   function secondFunction() {
//     console.log("This is the second function.");
//   }
  
//   callOtherFunctions();
  
// function display(){
//    var name = prompt("enter name")
//    alert(name)
// }

// display()


// Code the first line of a function named concat that has 3
// parameters, the first three letters of the alphabet. Call that takes
// a variable, a string, and a number as arguments.






// function calculateSum(a, b) {
//     let result = a + b;
//     return result; 
//   }
//   const x = 5;
// const y = 7;
// const sum = calculateSum(x, y);
// console.log(sum);




function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
  
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    var average = sum / numbers.length;
    return average;
}

var numbers = [1, 2, 3, 4, 5];
var average = calculateAverage(numbers);
console.log(average); // Output: 3


// Write a JavaScript function that takes two parameters and returns
// their sum.
function calculateSum(num1, num2) {
    var sum = num1 + num2;
    return sum;
  }
  var number1 = 5;
  var number2 = 10;
  var sum = calculateSum(number1, number2);
  console.log(sum); // Output: 15
    




  function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
  
    var sum = numbers.reduce(function(acc, num) {
      return acc + num;
    }, 0);
  
    var average = sum / numbers.length;
    return average;
  }
  

var numbers = [1, 2, 3, 4, 5];
var average = calculateAverage(numbers);
console.log(average); // Output: 3



function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
  
    var sum = numbers.reduce(function(acc, num) {
      return acc + num;
    }, 0);
  
    var average = sum / numbers.length;
    return average;
  }
  
  var numbers = [1, 2, 3, 4, 5];
  var averageResult = calculateAverage(numbers);
  console.log(averageResult); // Output: 3

  

  function countLetters(word) {
    var letterCounts = {};
  
    for (var i = 0; i < word.length; i++) {
      var letter = word[i].toLowerCase();
  
      if (letter.match(/[a-z]/i)) {
        if (letterCounts[letter]) {
          letterCounts[letter]++;
        } else {
          letterCounts[letter] = 1;
        }
      }
    }
  
    return letterCounts;
  }

  
  var word = "Hello";
var letterCounts = countLetters(word);
console.log(letterCounts); // Output: { h: 1, e: 1, l: 2, o: 1 }




function setYear(date, year) {
    date.setFullYear(year);
  }
  var myDate = new Date();
console.log("Before setting year:", myDate);

setYear(myDate, 2023);
console.log("After setting year:", myDate);



function calculateAge(dateOfBirth) {
    var currentDate = new Date();
    var birthDate = new Date(dateOfBirth);
  
    var age = currentDate.getFullYear() - birthDate.getFullYear();
  
    // Check if the birthday has occurred this year
    var hasBirthdayOccurred = (currentDate.getMonth() > birthDate.getMonth()) || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate());
  
    if (!hasBirthdayOccurred) {
      age--;
    }
  
    return age;
  }

  

  var dateOfBirth = "1990-05-15";
var age = calculateAge(dateOfBirth);
console.log(age); // Output: The calculated age based on the current date


function reverseArray(arr) {
    return arr.reverse();
  }

  var array = ['a', 'b', 'c', 'd', 'e'];
var reversedArray = reverseArray(array);
console.log(reversedArray); // Output: ['e', 'd', 'c', 'b', 'a']

// let globalVariable = "Hello, world!";
// function access() {
//   console.log(globalVariable);
// }
// access(); 



// let myVariable = prompt("ENTER A FRUIT NAME");
// switch (myVariable) {
//   case "apple":
//     alert("It's an apple.");
//     break;

//   case "banana":
//     alert("It's a banana.");
//     break;

//   case "orange":
//     alert("It's an orange.");
//     break;

//   default:
//     alert("It's something else.");
// }



// let cityName = prompt("Enter a city name:");

// switch (cityName) {
//   case "London":
//     alert("You entered London!");
//     break;

//   case "Paris":
//     alert("You entered Paris!");
//     break;

//   case "New York":
//     alert("You entered New York!");
//     break;

//   default:
//     alert("The city name you entered does not match any known cities.");
// }
