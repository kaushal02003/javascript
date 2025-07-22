//understanding how asynchronous code work
//understanding Event loop,Callback queue and callstack
//for all reference see in copy


console.log("item ordered");
setTimeout(() => {
    console.log("item delivered");
}, 5000);
console.log("item on the way");
//In this code setTimeout is asynchronous so browser takes it and the other code runs as usual.


