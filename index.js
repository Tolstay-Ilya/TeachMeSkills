// Task 1 ===========================

var sayHello = function(person) {
    let name = prompt('What is your name?');

    if (name == "Mark") {
      alert( 'Hi, ' + name );
    } else {
      alert( 'Hello, ' + name ); 
    }
  };
  
  sayHello(' ');


// Task 2 ===========================

First Try
var theoremPifagor = function(triangle) {
}

console.log(Math.pow(3,2) + Math.pow(4,2));
 

// Task 3 ===========================

var number = function min(x, z) {
let min = (a, b) => a < b ? a : b

}


number(" ")


// task 4
function isEven(value){
    let result;
    if(value % 2 === 0){
        console.log("Even"); 
    }else{
        console.log("Odd"); 
    }
}
isEven( value = 3)

// task 5
    var yourString = prompt(" ");
var result = yourString.substring(1, yourString.length-1);

console.log(result);
    

// task 7
function startsWithCapital(word){
    let result;
    let name = prompt("Введите своё имя")
    if (name.charAt(0) === name.charAt(0).toUpperCase()) {
        prompt("Оууу май, большая буква!");
    }else{
        prompt("Нет уж, маленькие буквы - скучно’");
    }
}

startsWithCapital(word = " ")