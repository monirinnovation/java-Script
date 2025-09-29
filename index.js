/*let firstName = "Monir"
let lastName = "Islam";
let fullName = firstName + lastName;
console.log(fullName)*/


/*let num1 = 20;
let num2 = 30;

document.write ("num1=" + num1 + '<br/>' + "num2 = " + num2)*/


/*let text = prompt ("Enter your name");

document.write(text.length)*/


/*let text = "Bangladesh"

document.write(text.charAt(3));*/

/*let text = "Bangladesh";

text = text.to();

document.write(text)*/

/*let text1 = " Bangladesh"
let text2 = " is very beautiful"
let text = text1.concat(text2)

document.write(text)*/

/*document.write('Personal Budget Tracker' + "<br/>")

const userName = "Monirul Islam"
const income = 30000;
const expenses = 35000;



document.write('User: '+  userName.toUpperCase() + "<br/>")
document.write('Total Income: $' +  income + '<br/>')
document.write('Total Expenses: $' + expenses)*/

/*let num1 = Number(prompt("Enter your first number"));

let num2 = Number(prompt("Enter your second number"));

// num1 = parseInt(num1, 10)
// num2 = parseInt(num2, 10)

let sum, sub;


sum = num1 + num2;
sub = num1 - num2

document.write("Addition = " + sum + "<br/>")
document.write("Subtraction =" + sub)*/


/*let first = prompt ("Enter your first number");

let second = prompt("Enter your second number")

first = parseInt(first, 10)
second = parseInt(second, 10)


let add, sub, mul, divide, mod;

add = first + second;
sub = first - second;
mul = first * second;
divide =  first / second;

mod = first % second;

document.write("addition = " + add + "<br/>")

document.write("multiplication = " + mul)
document.write (sub)
document.write(divide)*/


 /*let a = 20;
 let b = 10;
 let c = a + b;

 document.write("20 + 10 =" +  c  + "<br/>")

 let  d = 20;
 let e = 10;
 let f = d - e;
 document.write("20 - 10 =" + f)*/


 /*let first = prompt("Enter your first number");

 let second = prompt("Enter your second number");

first = parseInt(first, 10);
second = parseInt(second, 10);

 let add = first + second;

 document.write(first + " +" + second + "=" + add + "<br/>");


 let sub = first - second;
 document.write(first + " -" + second + "=" + sub + "<br/>");

 let mul = first * second;
 document.write(first + " *" + second + "=" + mul + "<br/>");

  let divide = first / second;
 document.write(first + " /" + second + "=" + divide + "<br/>");


  let modulus = first % second;
 document.write(first + " %" + second + "=" + modulus + "<br/>");*/

/*let marks = prompt("Check your grade : ")

 if (marks >=80 && marks <= 100)
    document.write("A+")

else if (marks <80 && marks >= 70)
    document.write("A-")
 else if  (marks <70 && marks >=60)
    document.write("B")
else if (marks <60 && marks >= 50)
    document.write("B-")
else if ( marks <50 && marks >= 40)
     document.write(marks + " =" + " C" + " Grade")
else if (marks <40 && marks >= 33 )
     document.write(marks + " =" + " D" + " Grade")
    else 
      document.write(marks + " =" + " Fail" )*/
    


    /* let num1 = prompt("Enter first Number =")
     let num2 = prompt("Enter second Number =")
     let num3 = prompt("Enter third Number =")

     if (num1>num2 && num1 >num3)
        document.write(num1)

    else if (num2>num1 && num2>num3)
        document.write(num2)
    else 
        document.write(num3)*/

    // let num = prompt("Enter a letter");

    // if (letter == "a" || letter== "e" || letter == "i" || letter == "o" || letter == "u" || letter == "A" || letter==  "E" || letter == "I" || letter == "O" || letter== "U")
    //     document.write("Vowel")
    // else 
    //     document.write("Consonant")

    // ternary operator

    // let result = num > 0 ? "Positive" : num < 0 ? "negative" : "Zero"

    // document.write(result)

    
//   let digit = prompt("Enter a digit");

//   switch(digit){
//     case "0":
//     document.write("Zero");
//     break
//     case "1":
//     document.write("One");
//     break
//     case "2":
//     document.write("Two");
//     break
//     case "3":
//     document.write("Three");
//     break
//     case "4":
//     document.write("Four");
//     break
//     case "5":
//     document.write("Five");
//     break

//     default:
//     document.write("not a digit")

//   }

// let letter = prompt("Enter a letter");

//  letter = letter.toLowerCase();

// switch(letter){
//     case "a":
//     case "e":   
//     case "i": 
//     case "o":
//     case "u":
//         document.write("Vowel")   
//         break
//         default:
//             document.write("Consonant")    
// }


// for ( let x = 10; x >= 1; x = x - 1){
//     document.write( " "  +  x ) ; 

// }


// let age = prompt("Enter your age ")
//  if (age <= 18)
//  document.write("You cannot drive")
 
//  else
//     document.write("You can drive")


//  let support = prompt("Who do you support")

//  if (support.toLowerCase()== "pakistan  ")
//     document.write("You are welcome")

// else 
//     document.write("Your not welcome")

// let i = 1;

// while(i <=5)
// {
//     document.write(" " +i)
//     i = i  +1
// }

// for (let i = 1; i <=100; i ++){

//  document.write(" "+ i)

//  if (i ==10){
//         break;
//     }
// }


for (let i = 1; i <= 100; i  ++)
{
    
 if (i % 3 && i %5 ===0){
        document.write("FizzBuzz" +"<br/>")
    }

    else if (i %3 === 0){
        document.write(" Fizz" +"<br/>")
    } else if (i % 5 === 0){
        document.write("Buzz" + "<br/>")
    } else{

        document.write(i + "<br/>") 
    }
   

}
    
    
   
    