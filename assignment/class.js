class Person
{
    constructor(abc){                              //it is not a mandatory to define constructor in class
        this.a=abc;
        this.b=35;
    }

    method1=()=>
    {
        console.log('method1 of class person');
         console.log(this.a);
    }
}
const personobj=new Person(23);
console.log(personobj.method1());
personobj.c=40;
console.log(personobj.c);
console.log(personobj.a);
 console.log(personobj.b);
