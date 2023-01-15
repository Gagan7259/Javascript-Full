//json:javascript object notation
//json used to send and recive data
//json ios text for\mat is completly language independent

const obj = {
  name: "Gagan",
  hobbies: ["Programming ","Paly video Games"],
  hello: function () {
    console.log("good morning");
  },
};
console.log(obj);
console.log(obj.name);
console.log(obj.hobbies);
obj.hello();

console.log(typeof obj);

 const send=JSON.stringify(obj);
 console.log(send);
console.log(typeof send);

const recive=JSON.parse(send);
console.log(recive);
console.log(typeof recive);


