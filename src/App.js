import React from "react";
import "./App.css";
import restaurant from "./restaurant.jpg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We have {props.adjective} food.</p>
      <img src={restaurant} height={200} alt="a warm setting of restaurant" />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = ["Smelly noodles", "pho", "lemon chicken"];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

function App() {
  return (
    <div className="App">
      <Header name="Jen" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getUTCFullYear()} />
    </div>
  );
}

export default App;
