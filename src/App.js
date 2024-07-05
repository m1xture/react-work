import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import Message from "./components/Message/Message";
import Button from "./components/Button/Button";

function App() {
  function clickFn() {
    console.log("another click happened");
  }
  const username = "Tetiana";
  return (
    <>
      <Greeting name={username} />
      <Message text="sunshine" />
      <Button func={clickFn} />
    </>
  );
}

export default App;
