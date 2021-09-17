import "./App.css";
import FruitContainer from "./FruitContainer";

function App() {
  const fruitArr = [
    "Apple🍎",
    "Banana🍌",
    "Cherry🍒",
    "Durian🥝",
    "Elderberry🫐",
    "Fig🥭",
    "Grapes🍇",
    "Huckleberry🫐",
    "Icaco🍒",
    "Jackfruit🍈",
    "Kiwi🥝",
    "Lemon🍋",
    "Mango🥭",
    "Nectarine🍊",
    "Orange🍊",
    "Peach🍑",
    "Quince🍐",
    "Raspberry🍒",
    "Strawberry🍓",
    "Tangerine🍊",
  ];
  const meatArr = [
    "Alpaca🦙",
    "Boar🐗",
    "Chicken🍗",
    "Deer🦌",
    "Eel🍣",
    "Fish🐟",
    "Goose🦢",
    "Herring🐟",
    "Iguana🦎",
    "Jellyfish🎐",
    "Kangaroo🦘",
    "Lobster🦞",
    "Mutton🐑",
    "Nugget🍘",
    "Octopus🐙",
    "Pork🥓",
    "Quail🐦",
    "Rabbit🐰",
    "Shrimp🍤",
    "Turkey🦃",
  ];
  const vegArr = [
    "Asparagus🥦",
    "Broccoli🥦",
    "Carrot🥕",
    "Dandelion🌼",
    "Eggplant🍆",
    "Fennel🌱",
    "Horseradish🍠",
    "Iceberg Lettuce🥬",
    "Jalapeno🌶",
    "Garlic🧄",
    "Jicama🧅",
    "Kale🥦",
    "Leek🥬",
    "Mushrooms🍄",
    "Nopal🌵",
    "Onion🧅",
    "Potato🥔",
    "Quinoa🌾",
    "Radish🌶",
    "Spinach🥬",
    "Tomato🍅",
  ];

  return (
    <div className="appdiv">
      <h1>ABC's of Food!</h1>
      <div className="lists">
        <div className="column">
          <FruitContainer fruits={fruitArr} desc="Filter the Fruit!" />
        </div>
        <div className="column">
          <FruitContainer fruits={meatArr} desc="Filter the Meat!" />
        </div>
        <div className="column">
          <FruitContainer fruits={vegArr} desc="Filter the Vegetables!" />
        </div>
      </div>
    </div>
  );
}

export default App;
