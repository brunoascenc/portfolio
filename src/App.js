import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Route path="/" component={About} />
        <Route path="/" component={Skills} />
        <Route path="/" component={Projects} />
      </main>
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
