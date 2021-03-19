import "./App.scss";
import Button from "./components/Button/Button";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App font-sans">
      <Menu />
      <div className="inner lg:p-12 lg:flex lg:gap-10">
        <div className="picture"></div>
        <div className="content mx-8 lg:mx-0">
          <h1 className="my-10 text-4xl font-bold lg:mt-20">Morella</h1>
          <p className="font-serif leading-loose lg:mr-28">
            Morella mélységesen művelt volt. Életemet merem rátenni: tehetsége
            magasabb rendű volt a közönségesnél - elméjének ereje óriási.
            Éreztem ezt, és sok dologban tanítványa lettem. De hamarosan úgy
            találtam, hogy pozsonyi nevelése folytán azokat a misztikus írásokat
            rakja elém, egész csomót, amiket általában a korai német irodalom
            puszta salakjának szoktunk tekinteni. Ez volt, el sem tudtam
            képzelni, mi okból, kedvence s állandó tanulmánya - s hogy idő
            folytán ez lett nekem magamnak is, a példa és szokás egyszerű, de
            hatékony befolyásának kell tulajdonítani...
          </p>
          <Button>READ MORE</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
