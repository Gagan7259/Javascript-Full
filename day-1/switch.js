// switch(Math.floor(Math.random()*5)+1){
//     case 1:
//         console.log(1);
//         break;
//         case 2:
//         console.log(2);
//         break;
//         default:
//             console.log("no match found");
// }

let player = "paper";
let computer = "rock";
switch (player) {
  case computer:
    console.log("tie game");
    break;
  case "rock":
    if (computer === "paper") {
      console.log("computer wins");
    } else {
      console.log("player wins");
    }
    break;
    case "paper":
    if (computer === "scissors") {
      console.log("computer wins");
    } else {
      console.log("player wins");
    }
    break;
  default:
    if (computer === "rock") {
        console.log("computer wins");
      } else {
        console.log("player wins");
      }}
