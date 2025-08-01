console.log("hello world");

let myObject ={
Title: "The First Moon Landing On",
FirstAstronaut : "Neil Armstrong",
SecondAstronaut : "Buzz Aldrin", 
YearDiscovered : 1969,
Company : "US-NASA Space Agency",
missionNumber : 11,
BroadcastPopulation : "500 Million",

};
let heading = document.getElementById("h1").innerHTML = "JSON Workshop";
console.log(heading);
//document.getElementById("root").innerHTML ="Siphakathi"
console.log(myObject["Title"]);
console.log(myObject["Company"]);
myObject.recordID = "12H56ZX6";
//console.log(myObject);
//document.getElementById("root").innerHTML = JSON.stringify(myObject);
const outputDiv = document.getElementById("output");

outputDiv.innerHTML = `
  <p><strong>Title:</strong> ${myObject.Title}</p>
  <p><strong>First Astronaut:</strong> ${myObject.FirstAstronaut}</p>
  <p><strong>Second Astronaut:</strong> ${myObject.SecondAstronaut}</p>
  <p><strong>Year Discovered:</strong> ${myObject.YearDiscovered}</p>
  <p><strong>Company:</strong> ${myObject.Company}</p>
  <p><strong>Mission Number:</strong> ${myObject.missionNumber}</p>
  <p><strong>Broadcast Population:</strong> ${myObject.BroadcastPopulation}</p>
`;

const image =document.createElement("img");

image.src ="pxfuel.com-10_ver_1.jpg";

image.style.width = "100%";
image.style.height = "100%";

document.getElementById("image").appendChild(image);