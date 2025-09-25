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

let marks = prompt("Check your grade : ")

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
      document.write(marks + " =" + " Fail" )

    

