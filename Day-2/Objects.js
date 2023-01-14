//Objects

//key-values pairs in curly bases

// const obj={name:"Gagan"}
// console.log(obj);

const obj2 = {
  name: "Baragav",
  age: 43,
  email: "pora@gamil.com",
  login: {
    user: "nekenduku",
    password: "ha ha Nen cheppa",
  },
  action:function () {
    return "Hey pora rey";
  },
};
console.log(obj2.login.password);
console.log(obj2.login.user);
//console.log(obj2.["Baregav"]);
console.log(obj2.action());
