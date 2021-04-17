import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import Tabular from "./components/Tabular"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter >
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/aboutus" component={AboutUs} />
                <Route exact path="/tab" component={Tabular} />
            </Switch>
        </BrowserRouter >
      </div>
  );
}

export default App;
// {/*  */}
// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
      

    