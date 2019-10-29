const chalk=require('chalk');
var person={
    'firstname':"himaja",
    lastname:"g",
    age:21,
    add:(a,b)=>{
        return(a+b);
    }
}
try{
let resul=person.add(2,3);
console.log(result);
}catch(error)
{
    console.log("something went wrong");
    console.log(chalk.red("something went wrong"));
}
