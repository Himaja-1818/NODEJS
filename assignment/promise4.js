var fun = new Promise((resolve, reject)=> {
    Savings = 200000;
    price = 60000;
    if (Savings > price) {
      resolve({
        brand: "iphone",
        model: "6s"
      });
    } else {
      reject("We donot have enough savings");
    }
  });fun.then((value)=> {
    console.log(value);
  }).catch((reason)=> {
    console.log( reason);
  })