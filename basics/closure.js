//-----Closure-----
// A closure is a function that has access to its own scope, the outer function's scope

function outerFunction(){
    let name = "siddhu";

    function innerFunction(){
        console.log(name);
    }
    return innerFunction;
}
let innerValue = outerFunction();
innerValue();
// innerValue is a closure that has access to the variables of outerFunction
// even after outerFunction has finished executing
