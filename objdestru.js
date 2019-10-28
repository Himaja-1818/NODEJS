
  //instead of using arithmetic.  many times put . after require
  let {add}=require('./objfun.js').arithmetic;
  console.log(add(6,8,7));
  //more than one
  let {add,sub}=require('./objfun.js').arithmetic;
console.log(sub(4,2));