let doHomework=(subject,callback)=>{
     console.log(`Starting my ${subject} homework.`);
     callback();                                        //callback goes to another function
   
   }
let alertFinished=()=>
    {
    console.log('Finished my homework');
    }
   
   doHomework('math', alertFinished);
    
    