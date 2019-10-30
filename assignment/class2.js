class bike
{
    constructor(model)
    {
        this.name=model;
    }
    bike1=()=>{
        console.log("bike is");
    }
}
const x=new bike("duke");
console.log(x.bike1());
console.log(x.name);
