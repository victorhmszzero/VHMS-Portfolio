import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/home";
import "./sharedStyles/sharedStyles.css";

function App() {
  return (
    <body>
      <header>
        <Nav />
      </header>
      <main>
        <Home />
      </main>
      <footer></footer>
    </body>
  );
}

export default App;
