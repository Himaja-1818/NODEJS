const fun=(a,b)=>
{
    return new Promise((resolve,reject)=>
    {
        if(a<b)
        resolve("a is small");
        else
        reject("b is small");
    })
}
fun(9,10).then((result)=>
{
console.log(result);})
const fun1=(c,d)=>{
return new Promise((resolve,reject)=>
{
    if(c!==0&&d!==0)
    resolve(c*d);
    else
    reject("not found");
})
}
fun1(4,5).then((result1)=>
{
console.log(result1);
}).catch((merr)=>
{
    console.log(merr);
})
const fun2=(e,f)=>{
return new Promise((resolve,reject)=>
{
    if((e*f)%2===0)
    resolve("multiple of 2");
    else
    reject("not a multiple of 2");
})
}
fun2(4,10).then((result2)=>
{
    console.log(result2);
}).catch((error)=>{
console.log(error);
})