function add(x,y,z,callback){
    let sum=x+y+z;
    callback(sum);
 }
 add(2,3,2,(result)=>{
    console.log(result);
 })
 function sub(x,y,callback){
    let sub=x-y;
    callback(sub);
 }
 sub(3,2,(result1)=>{
    console.log(result1);
 })
 