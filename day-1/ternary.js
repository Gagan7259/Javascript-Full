//conditional ternary operations

//let soup="chiken soup"
//let soup;
// let response=soup?"yes we have soup":"sorry no soup today get out"
// console.log(response);


//let soup="chiken soup"
// let soup;
// let customerbanned=false
// let a=customerbanned?"oh oh u bitch no soup for u" 
// :soup?`yes uwe have soup for u`:"sorry nom soup today"
// console.log(a);


// let score=59;
// let mygrade=score>90?"A"
// :score>80?"B"
// :score>70?"c"
// :score>60?"D"
// :"F"
// console.log(mygrade);

let player="scissors"
let computer="paper"
let result=player===computer?"Tie Game"
:player==="rock"&& computer==="paper"?"computer wins"
:player==="paper"&& computer==="scissors"?"computer wins"
:player==="scissors"&& computer==="rock"?"computer wins"
:"player wins"
console.log(result);
