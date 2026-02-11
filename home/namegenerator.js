obj1={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}
obj2={
    1:"Engine",
    2:"Food",
    3:"Garments"
}
obj3={
    1:"Bro",
    2:"Limited",
    3:"Hub"
}
var adj=Math.floor(Math.random()*3)+1
var shop=Math.floor(Math.random()*3)+1
var ano=Math.floor(Math.random()*3)+1
console.log(`The business name is:-${obj1[adj]} ${obj2[shop]} ${obj3[ano]}`)
// generate a number between a given range is 
// Math.floor(Math.random()*(max-min+1))+min