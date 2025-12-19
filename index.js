const originalArray=[
  {
    name :"Naziya",
    age : 10,
    color :"green",
    alive : true,

  },
  {
    name :"Amyra",
    age : 5,
    color :"red",
    alive : false,

  },
  {
    name :"Sandy",
    age : 9,
    color :"yellow",
    alive : true,

  },
  {
    name :"Ayaan",
    age : 20,
    color :"blue",
    alive : true,

  },
  {
    name :"Sunny",
    age : 25,
    color :"orange",
    alive : false,

  },
  
];

//filter() ;The filter() method is used to create a new array containing only the elements that satisfy a given condition.It does not change the original array.

const originalArray1 = [...originalArray];
// 1.filter the array to get the items whose age is greatre than 10
const result = originalArray1.filter(item =>item.age>10);
console.log(result);

//output:

//[{
//age: 20,
//alive: true,
//color: "blue",
//name: "Ayaan"
//}, {
// age: 15,
//alive: false,
//color: "orange",
//name: "Sunny"
//}]
  
//find() is designed to return only one value — the first element that satisfies the condition.

const originalArray2 = [...originalArray];
const result = originalArray2.find(item =>item.color ==='red');
console.log(result);

//output:
//{
//  age: 5,
// alive: false,
// color: "red",
//name: "Amyra"
//}


//map() creates a new array based on the original,it allows you to return a new modified object for each element,It does not change the original array.

const originalArray3 = [...originalArray];
const updatedItems =originalArray3.map(item =>{
    return {
        ...item,
        country: "India"
    };
    });

console.log(updatedItems);

//output:
//{
  //age: 10,
  //alive: true,
  //color: "green",
  //country: "India",
  //name: "Naziya"
//}, {
  //age: 5,
  //alive: false,
  //color: "red",
  //country: "India",
  //name: "Amyra"
//}, {
  //age: 9,
  //alive: true,
  // color: "yellow",
  //country: "India",
  //name: "Sandy"
//}]

//delete() method is used to remove a property from an object,We perform the delete operation on the copy, not on the original object.


const originalArray4 = [...originalArray];
const updatedItems = originalArray4.map(item => {
  const newItem = { ...item };  //creating a copy of the object
  delete newItem.color;        //removing the color property
  return newItem;
});

console.log(updatedItems);

//output:
//[{
  //age: 10,
  //alive: true,
  //name: "Naziya"
//}, {
  //age: 5,
  //alive: false,
  //name: "Amyra"
//}, {
  //age: 9,
  //alive: true,
  //name: "Sandy"
//}]


//foreach() method executes a provided function once for each array element, it does not return a new array and does not change the original array.generally to print or log.

const originalArray5 = [...originalArray];
 const items=originalArray5.forEach(item =>{
    console.log(item.name);

});

//output:
//"Naziya"
//"Amyra"
//"Sandy"
//"Ayaan"
//"Sunny"


//reduce() method takes all the elements in an array and reduces them to a single value.

const originalArray6 = [...originalArray];
const totalAge =originalArray6.reduce((sum, item) => sum + item.age, 0);
console.log(totalAge);

//output:
//59

//sort() method is used to sort the elements of an array in place and returns the sorted aray.


const originalArray7 = [...originalArray];
const sortedItems =originalArray7.sort((a,b) => a.age - b.age);
console.log(sortedItems);

//output:
//[{
  //age: 5,
  //alive: false,
  //color: "red",
  //name: "Amyra"
//}, {
  //age: 9,
  //alive: true,
  //color: "yellow",
  //name: "Sandy"
//}, {
  //age: 10,
  //alive: true,
  //color: "green",
  //name: "Naziya"
//}, {
  //age: 15,
  //alive: false,
  //color: "orange",
  //name: "Sunny"
  // }, {
  //age: 20,
  //alive: true,
  //color: "blue",
  //name: "Ayaan"
//}]
   
//Create a new array containing only one property (names, colors etc.)

const originalArray8 = [...originalArray];
const names =  originalArray8.map(item => item.name);
console.log(names);

//output:
//["Naziya", "Amyra", "Sandy", "Ayaan", "Sunny"]


//Use every() to check if all items meet a condition

const originalArray9 = [...originalArray];
const ageGreaterThan10 = originalArray9.every(age => age>10);
console.log( ageGreaterThan10);

//output:
//false


//Use some() to check if at least one item meets a condition.

const originalArra10 = [...originalArray];
const ageGreterThan20 = originalArra10.some(age => age>20);
console.log(ageGreterThan20);


//output:
//


// Convert array of names to a single string using join().

const originalArra11 = [...originalArray];
const result = originalArra11.join(name => ',');
console.log(result);