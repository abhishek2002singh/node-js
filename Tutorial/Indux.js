// console.log("namste everyone")

const fs=require('fs');
// fs.writeFileSync("hello.txt" , "hii am abhishek yadav from allahabad");

// fs.writeFileSync("hello.txt" , "hii am abhishek yadav ");

// fs.appendFileSync("hello.txt" , "namste evryone");

const buf_data=fs.readFileSync("hello.txt");
// console.log(buf_data);

const org_data=buf_data.toString();

console.log(org_data)




