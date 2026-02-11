let arr=[1,2,3,4,5,6,56,89,76,544];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
    
// }
// let newArr=[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)   
// }
// console.log(newArr)
//     newArr = arr.map((e)=>{
//     return e**2
// })
// console.log(newArr)
// const greaterthantwo = ((e)=>
// {
//     return e>2
// })
// console.log(arr.filter(greaterthantwo))

// Reduce function
const mul =((a,b)=>{
    return a*b
})
console.log(arr.reduce(mul))

