let arithmetic={
    add:(a,b,c)=>{
    return(a+b+c);
},
    sub:(d,e)=>{
    return(d-e);
  
  },
   mul:(f,g)=>{
   return(f*g);
   },
   div:(h,i)=>
   {
       return(h/i);
   }}
   let sum=arithmetic.add(3,4,5);
   let sub=arithmetic.sub(6,2);
   let mul=arithmetic.mul(6,8);
   let div=arithmetic.div(8,4);
   console.log(mul);
   console.log(sum);
   exports.arithmetic=arithmetic;
