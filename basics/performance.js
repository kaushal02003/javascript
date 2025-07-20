
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