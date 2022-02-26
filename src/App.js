import logo from "./logo.svg";
import "./App.css";
import "./style.css";

function App() {
  return (
    <div>
      <body>
        <div className="container mx-auto mt-5">
          <button className="bg-green-200 md:bg-red-200 hover:bg-blue-300 text-white font-bold py-2 px-3 rounded sm:bg-yellow-400">
            Mi Boton
          </button>
          <h1 className="text-center normal-case mt-5 text-red-300 text-xl">Hola soy un h1</h1>
        </div>
        <div className="m-5 p-5 border">
          <p className="text-xl sm:text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum
            imperdiet massa, vel ultrices leo feugiat ut. Vivamus tempor laoreet
            sapien, in pulvinar leo. Maecenas felis est, tristique eget
            venenatis in, feugiat eget enim. Mauris mauris lectus, sodales at
            maximus a, blandit gravida ante. Quisque vehicula lectus id urna
            faucibus lacinia. Sed arcu quam, eleifend id lacus quis, malesuada
            mollis purus. Vestibulum fringilla ex eget nunc aliquet interdum.
          </p>
        </div>
      </body>
    </div>
  );
}

export default App;
