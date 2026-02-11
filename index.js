// const http = require('http');
// const myserver = http.createServer((req,res)=>{
//   console.log("Server1");
//   if(req.url === "/"){
//     res.setHeader("Content-type","text/html");
//     res.write("<html><head><title>Home Page</title></head>");
//     res.write('<body><h1>ABES Engineering College</h1><img src="https://media.licdn.com/dms/image/v2/C510BAQGHhq9X-H8LyQ/company-logo_200_200/company-logo_200_200/0/1631345366169?e=2147483647&v=beta&t=8hq7Hhr_Vlu6uIXpTU9yv31n6jB0_zBzvuFqHmHGwlg" alt="Home Page" ></body></html>');
//     res.end();
//   }
//   else if(req.url === "/about"){
//     res.end("Suraj Agarwal");
//   }
//   else if(req.url === "/contact"){
//     res.end("agarwalsuraj863@gmail.com");
//   }
//   else if(req.url === "/class"){
//     res.end("IT-A");
//   }
//   else{
//     res.end("Error 404! Page not found");
//   }
// });
// myserver.listen(5000,()=>{console.log("Server is running")});


const fs = require('fs');

// fs.writeFileSync("./abes.txt","We are students of ABESEC");
// const result = fs.readFileSync("./abes.txt","utf-8");
// console.log(result);
// fs.writeFile("./user2.txt","This is the great Suraj Agarwal here.",()=>{

// });
// fs.readFile("./abes.txt","utf-8",(err,data)=>{
//   if(err){
//     console.log(err);  
//   }
//   else{
//     console.log(data);
//   }
// });

// fs.appendFileSync("./abes.txt"," We are from IT-A.");
// fs.appendFile("./user.txt"," We are from IT.",(err)=>{
//   if(err){
//     console.log(err);
//   }  else{
//     console.log("Data appended successfully");
//   }
// });
// fs.appendFile("./user2.txt","Hello World!!!",()=>{

// });

// fs.writeFile("./a.txt","Hello World!!!",()=>{

// });

// fs.cpSync("./a.txt","./b.txt");\
// fs.cp("./a.txt","./abes.txt",(err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log("File copied successfully");
//   }
// });

// fs.unlinkSync("./a.txt");
// fs.unlink("./user2.txt",(err)=>{
//   if(err){
//     console.log(err);
//   } else {
//     console.log("File deleted successfully");
//   }
// });

// fs.readFile('abes.json', 'utf8', (err, data) => {
//     if (err) throw err;

//     const jsonData = JSON.parse(data); //Convert string → object
//     console.log(jsonData);
// });

const newData ={
  name: "Suraj Agarwal",
  age: 20,
  skills : ["MERN" , "DSA"]
};
fs.appendFile("abes.json",JSON.stringify(newData,null,2),(err) =>{
  if(err) throw err;
  console.log("Data written successfully");
});