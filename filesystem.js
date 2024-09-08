// FILE SYSTEM

// Imported the filesystem and equalling it to fs
const { log } = require('console');
const fs = require('fs');


//➡️ 1) Write Function : 
// fs.writeFile("hello.txt","hello aap kaise ho",function(err){
//     if (err) console.log(err);
//     else console.log("Done");
// })
// ____________________________________________________________

//➡️ 2) AppendFunction:
// fs.appendFile("hello.txt","mai toh acha hu",function(err){
//     if (err) console.log(err);
//     else console.log("Done");
// })

// ____________________________________________________________

//➡️ 3) Rename Function:
// fs.rename("hello.txt","hi.txt",function(err){
//     if (err) console.log(err);
//     else console.log("Done");
// })

// ____________________________________________________________

//➡️ 4) copyfile Function:
// fs.copyFile("hi.txt",'./copy/hi1.txt',function(err){
//     if (err) console.log(err);
//     else console.log("Done");
// })
// ____________________________________________________________

//➡️ 5) Unlink Function:
// fs.unlink("hi.txt",function(err){
//     if (err) console.log(err.message);
//     else console.log("Removed");
// })
// ____________________________________________________________

//➡️ 6) rm function:

// It removes an folder named copy and recursive is used to perform a recursive directory removal. In recursive mode operations are retried on failure. Default: false.

// fs.rm("./copy",{recursive:true},function(err){
//     if (err) throw err;
//     else console.log("Directory removed")
// })
// ____________________________________________________________

//➡️ 7) Open function:

fs.open("hello1.txt",'w',function(err){
    if (err) console.log(err);
    else console.log("done");
})
// ____________________________________________________________


