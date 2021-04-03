import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.css';
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import ShoppingCart from "./Components/Store";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/store">
            <ShoppingCart />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
