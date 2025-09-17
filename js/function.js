// function Hello(user){
//     console.log(`Hello ${user}`);
// }
// Hello("Vihaan");

// function sum(a,b){
//     return a+b
// }
// console.log(sum(45,90))

// const add=(a,b)=>{
//     return a+b
// }
// console.log(add(45,90))


// (function(){
//     console.log("hello");
// })()

function hello(user,callback){
    console.log(`Hello ${user}`);
    callback();
}
hello("Vihaan",function(){
    console.log("callback function");
})