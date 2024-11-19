import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data.js";
function App() {
  return (
    <div className="container">
      <Headers />
      <Menu />
      <Footer />
    </div>
  );
}
function Headers() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Footer() {
  const CheckDateTime = new Date().getHours();
  console.log(CheckDateTime);
  const openCheck = CheckDateTime > 8 && CheckDateTime < 22;
  console.log(openCheck);

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  /* useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []); */
  return (
    <footer className="footer">
      <h1>This is footer {time}</h1>
    </footer>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="pizzas">
        {pizzaData.map((item) => {
          return <Pizza item={item} />;
        })}
      </div>
    </div>
  );
}

function Pizza({ item }) {
  console.log(item);
  return (
    <>
      <div className="pizza" key={item.name} disabled={item.soldOut}>
        <img src={item.photoName} alt="Pizza Spinaci" />
        <div className="pizza">
          <h3>{item.name}</h3>
          <p>{item.ingredients}</p>
          <span>{item.price + 3}</span>
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
