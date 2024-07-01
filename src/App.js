import "./App.css";
import { Fragment } from "react";
import Colors from "./components/Colors/Colors";

function App() {
  const text = "Hello React!";

  const obj = {
    name: "Google",
    url: "https://google.com",
  };
  const myColors = ["blue", "green", "white", "yellow"];
  // const Colors = ({arr}) => (
  //   <ul>
  //     {arr.map((color) => (
  //       <li key={color}>{color}</li>
  //     ))}
  //   </ul>
  // );
  return (
    <>
      <h1>{text}</h1>
      <p>Welcome to website!</p>
      <img
        src="https://cdn-media-1.freecodecamp.org/images/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg"
        alt="logotype"
      />
      <a href={obj.url}>{obj.name}</a>
      <p>{5 + 10}</p>
      <Colors arr={myColors} />
    </>
  );
}

export default App;
