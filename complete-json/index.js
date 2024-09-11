const bioData={
    name: "Abhishek",
    age: "21",
    education: "graduate"
}

//object to json

const jsonData=JSON.stringify(bioData);
console.log(jsonData)

//json to object

const objData=JSON.parse(jsonData)
console.log(objData)