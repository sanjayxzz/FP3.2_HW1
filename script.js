

//1//

const data = [
  {key:"item", value:"pencil"},
  {key:"price", value: 250},
  {key:"inStock", value: true},

]

const transformedData = data.reduce((acc,curr) => {
  acc[curr.key] = curr.value
  return acc;
},{});

console.log(transformedData)

//2//

const students = [
  { item: "Pen", color: "blue" },
  { item: "Pen", color: "black" },
  { item: "Pen", color: "red" },
];

const colors = students.reduce((acc,curr) =>{ 
  acc.push( curr.color)
  return acc
},[])


console.log(colors)

//3//

const countries = [

  { item: "Car", manufacturingCity: "New York" },

  { item: "Car", manufacturingCity: "Los Angeles" },

  { item: "Car", manufacturingCity: "Chicago" },

];

const cities = countries.reduce((acc,curr) => {acc.push(curr.manufacturingCity)
  return acc;
},[])
console.log(cities)


//4//

const groceryItems = [

  { item: "Fruit", name: "Apple" },

  { item: "Fruit", name: "Banana" },

  { item: "Fruit", name: "Orange" },

];


const  fruits = groceryItems.reduce((acc,curr) => {
  acc.push(curr.name)
  return acc
},[])
console.log(fruits)

//5//

const details = [

  { key: "category", value: "Electronics" },

  { key: "rating", value: 4.5 },

  { key: "available", value: true },

];

const objects = details.reduce((acc,curr) => {
  acc[curr.key] = curr.value
  return acc
},{})


console.log(objects)