const  fun=()=>
{
    return new Promise((resolve,reject)=>
    {
   setTimeout(fun1=()=>{
   resolve("himaja");
}
,2000)});
}
fun().then((output)=>
{
    console.log(output);
}).catch((err)=>{
    console.log(err);
})