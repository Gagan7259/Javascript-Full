//Arrays

// const b=[1,2,3,4,5,6,7];
// //add elemets array with indexof method
// b[0]=2;
// console.log(b);

//length property
// let b=[1,2,3,4,5,6,7];
// console.log(b.length);
// //push method
// b.push(19);
// b.push(56);
// console.log(b);
// //Pop method
// b.pop();
// console.log(b);
// b.pop();
// console.log(b);

// const array = ["a", "b", "c", "d", "f", "g"];
// const myarray = array.slice(2, 5);
//  //(start to  end valures will be written)
//  array.reverse();
// console.log(myarray);
// console.log(array);

//Join method
// const array = ["a", "b", "c", "d", "f", "g"];
// const d=array.join();
// console.log(array);
// console.log(d);

//Split method
// const v = [
//   "Jr NTR opens up about overseas' audience reaction to RRR, says 'Japan expressed love for movie more than India'",
// ];
// const d=v.join();
// const c=d.split(" ");
// console.log(v);
// console.log(d);
// console.log(c);

//Concat Method

const a=["a","b"]
const b=["c","d"]
//const e=a.concat(b);
const e=[...a,...b]
console.log(e);
