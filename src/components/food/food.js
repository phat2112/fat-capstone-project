import Brushetta from "../../assets/brushetta.png";
import GreekSalad from "../../assets/greek-salad.jpg";
import GrilledFish from "../../assets/grilled-fish.png";
import Pasta from "../../assets/pasta.png";

export const FOOD_LIST = [
  {
    name: "Greek Salad",
    category: "salad",
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    image: GreekSalad,
  },
  {
    name: "Brushetta",
    category: "a-la-carte",
    price: "7.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
    image: Brushetta,
  },
  {
    name: "Grilled Fish",
    category: "mains",
    price: "20.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    image: GrilledFish,
  },
  {
    name: "Pasta",
    category: "mains",
    price: "18.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    image: Pasta,
  },
  {
    name: "Lemon Dessert",
    category: "desserts",
    price: "6.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    image: GreekSalad,
  },
];

export const TAB_LIST = [
  { label: "all", value: "" },
  { label: "A la carte", value: "a-la-carte" },
  { label: "Mains", value: "mains" },
  { label: "Salad", value: "salad" },
  { label: "Desserts", value: "desserts" },
];
