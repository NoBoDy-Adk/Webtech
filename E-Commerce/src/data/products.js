import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description:
      "Noise-cancelling Bluetooth headphones with 20-hour battery life and immersive sound experience.",
    price: 1999,
    image: product1,
    rating: 4,
    reviews: [
      "Great sound quality and battery backup!",
      "Comfortable for long hours.",
      "Good noise cancellation for the price."
    ]
  },
  {
    id: 2,
    name: "Smartwatch",
    description:
      "Track your fitness and notifications with this stylish smartwatch featuring heart rate tracking and sleep monitoring.",
    price: 2999,
    image: product2,
    rating: 5,
    reviews: [
      "Excellent battery and accurate tracking.",
      "Love the smooth display and build quality.",
      "Worth the price for daily use."
    ]
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description:
      "Compact wireless speaker with deep bass, 360° sound, and 12-hour playtime.",
    price: 1499,
    image: product3,
    rating: 4,
    reviews: [
      "Superb sound quality for the size.",
      "Loud and clear, ideal for outdoor use.",
      "Battery lasts really long."
    ]
  }
];

export default products;
