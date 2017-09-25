// Normal Function Statement
function sayHi(){
    console.log("Hi");
}
sayHi();
// * End of Normal Function


// Function Expression
var sayBye = function(){
  console.log("Bye!");  
};
sayBye();

// OR
function callFunction(fun){
    fun();
}
callFunction(sayBye);
// * End of Function Expression