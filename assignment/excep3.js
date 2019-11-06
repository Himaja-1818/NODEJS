let json = '{ "age": 30 }'; // incomplete data

try {

   user = JSON.parse(); // <-- no errors
  console.log( user ); // no name!

} catch (e) {
  console.log( "doesn't execute" );
}