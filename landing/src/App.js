import "./App.css";
import Button from "./components/Button/Button";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <h1>
        Find Your
        <br />
        Dream Job
        <br />
        with Us
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Button>APPLY</Button>
    </div>
  );
}

export default App;
