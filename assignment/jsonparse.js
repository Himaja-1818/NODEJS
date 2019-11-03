var person=`{
    "firstname":"himaja",
    "lastname":"g",
    "age":21,
    "city":"blore",
    "sex":"female",
    "email":"himajagdr",
    "contact":9751558565
}`;
var name=JSON.parse(person);
console.log(name.firstname+','+name.city);