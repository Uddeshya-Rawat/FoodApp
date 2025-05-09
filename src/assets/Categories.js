 import dairy from "../assets/dairy.jpeg"
 import beverage from "../assets/beverage.png"
 import bakery from "../assets/bakery.png"
 import fruits from "../assets/fruits.jpeg"
 import snacks from "../assets/snacks.png"
 import vegetable from "../assets/vegetable.png"

 
 
 export const categories = [
  {
    text: "Fruits",
    path: "/categories/fruits",
    image: fruits,
    bgColor: "bg-yellow-100",
    products: [
      { name: "Apple", price: 20 },
      { name: "Banana", price: 10 },
      { name: "Mango", price: 30 },
      { name: "Orange", price: 25 },
      { name: "Pineapple", price: 40 },
    ],
  },
  {
    text: "Vegetables",
    path: "/categories/vegetables",
    image: vegetable,
    bgColor: "bg-green-100",
    products: [
      { name: "Carrot", price: 15 },
      { name: "Spinach", price: 12 },
      { name: "Potato", price: 18 },
      { name: "Tomato", price: 14 },
      { name: "Cucumber", price: 16 },
    ],
  },
  {
    text: "Dairy Products",
    path: "/categories/dairy",
    image: dairy,
    bgColor: "bg-blue-100",
    products: [
      { name: "Milk", price: 45 },
      { name: "Cheese", price: 80 },
      { name: "Yogurt", price: 25 },
      { name: "Butter", price: 60 },
      { name: "Cream", price: 70 },
    ],
  },
  {
    text: "Bakery",
    path: "/categories/bakery",
    image: bakery,
    bgColor: "bg-pink-100",
    products: [
      { name: "Bread", price: 35 },
      { name: "Croissant", price: 40 },
      { name: "Muffin", price: 30 },
      { name: "Donut", price: 20 },
      { name: "Bagel", price: 25 },
    ],
  },
  {
    text: "Beverage",
    path: "/categories/beverages",
    image: beverage,
    bgColor: "bg-red-100",
    products: [
      { name: "Orange Juice", price: 50 },
      { name: "Soda", price: 20 },
      { name: "Coffee", price: 60 },
      { name: "Tea", price: 15 },
      { name: "Lemonade", price: 25 },
    ],
  },
  {
    text: "Snacks",
    path: "/categories/snacks",
    image: snacks,
    bgColor: "bg-orange-100",
    products: [
      { name: "Potato Chips", price: 25 },
      { name: "Cookies", price: 30 },
      { name: "Popcorn", price: 20 },
      { name: "Nuggets", price: 50 },
      { name: "Nachos", price: 35 },
    ],
  },
];

  