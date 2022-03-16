import Nav from "./Nav";
import Beer from "./Beer";
import beers from "./datas";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <div className="beers">
          {beers.map((beer, index) => (
            <Beer number={index} key={index} {...beer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
