import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => console.log(data.teachers));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer> </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
