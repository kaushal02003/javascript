
//code 1
const t1 = performance.now();

for(let i=1; i<=100; i++){
    let newElement = document.createElement("p");
    newElement.textContent = "This is paragraph "+i;
    document.body.appendChild(newElement);
}

const t2 = performance.now();
console.log("time taken by code 1: ",t2-t1);

//code 2

let t3 = performance.now();

let div = document.createElement("div");
for(let i=1; i<=100; i++){
    let para = document.createElement("p");
    para.textContent = "This is para from code2 number: "+i;
    div.appendChild(para);
}
document.body.appendChild(div);
const t4 = performance.now();
console.log("time taken by code2: ",t4-t3);

//----using document fragment---

let t5 = performance.now();
//this is the most optimised way since documentfragment itself need no reflow and repaint.
let fragment = document.createDocumentFragment();
for (let i = 1; i < 100; i++) {
    let para = document.createElement("p");
    para.textContent = "This is para: "+i;
    fragment.appendChild(para);
}
//only 1 reflow and 1 repaint is required 
document.body.appendChild(fragment);

let t6 = performance.now();
console.log("this is time after using document fragment: ",t6-t5);
