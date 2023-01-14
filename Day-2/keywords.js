var let const

var x=1;
var c=3;
console.log(x);
function display(){
    const x=1;
    let y=1;
    console.log(x);
    console.log(y);
}
display();

console.log(x);
//its is variable to acces the values
//let key acces black of the code it can change values
//const key cant update or change values

var x = 1;
let y = 3;
const z = 5;
console.log(x);
console.log(y);
console.log(z);


function a(){
    console.log(`fuction:${x}`);
    console.log(`fuction:${y}`);
    console.log(`fuction:${z}`);

}
{
    console.log(`block:${x}`);
    console.log(`block:${y}`);
    console.log(`block:${z}`);
}
a();
//global variables not a function or block not desirable
//local variables function or block
//var instance function() scoped variables
//let and const keywords block scoped variables
