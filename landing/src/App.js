import "./App.css";
import Button from "./components/Button/Button";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App bg-blue-200 h-screen flex flex-col items-start pb-8 pl-8 md:pl-16">
      <Menu />
      <div className="flex-grow">
        <h1 className="mt-32 text-5xl text-blue-900 md:text-9xl md:mt-16 font-sans">
          Find Your
          <br />
          Dream Job
          <br />
          with Us
        </h1>
        <p className="mt-10 mr-8 max-w-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <Button>APPLY</Button>
    </div>
  );
}

export default App;
