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
  const openHour = 8;
  const closeHour = 22;
  const openCheck = CheckDateTime > openHour && CheckDateTime < closeHour;
  console.log(openCheck);

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  /* useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []); */
  if (!openCheck) {
    return (
      <footer className="footer">
        <div className="order">
          <p>
            We're open between {openHour} am to {closeHour} pm.
          </p>
        </div>
      </footer>
    );
  }
  return (
    <footer className="footer">
      <div className="order">
        {openCheck ? (
          <button className="btn">Order</button>
        ) : (
          <p>
            We're happy to welcome you between {openHour} am and {closeHour} pm.
          </p>
        )}
        <h1> {time}</h1>
      </div>
    </footer>
  );
}

function Menu() {
  /* const notSoldData = pizzaData.filter((item) => item.soldOut);
  const SoldData = pizzaData.filter((item) => !item.soldOut); */
  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((item) => {
          return <Pizza item={item} />;
        })}
      </ul>
      {/*  {notSoldData && (
        <>
          <h3>Not Sold</h3>
          <ul className="pizzas">
            {notSoldData.map((item) => {
              return <Pizza item={item} />;
            })}
          </ul>
        </>
      )}
      {SoldData && (
        <>
          <h3>Sold</h3>
          <ul className="pizzas">
            {SoldData.map((item) => {
              return <Pizza item={item} />;
            })}
          </ul>
        </>
      )} */}
    </div>
  );
}

function Pizza({ item }) {
  return (
    <>
      <div
        className={`pizza ${item.soldOut && "sold-out"}`}
        key={item.name}
        disabled={item.soldOut}
      >
        <img src={item.photoName} alt="Pizza Spinaci" />
        <div className="pizza">
          <h3>{item.name}</h3>
          <p>{item.ingredients}</p>
          <span>{item.soldOut ? "sold - out" : item.price + 3}</span>
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
