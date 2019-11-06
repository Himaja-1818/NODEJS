var sentence;
sentence = true;
promise1 = new Promise(function(resolve, reject) {
  if (sentence) {
    resolve("The man likes to keep his word");
  } else {
    reject("The man doesnt want to keep his word");
  }
});
console.log(promise1);