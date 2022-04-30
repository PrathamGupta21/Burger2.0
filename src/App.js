import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerMaker from "./components/BurgerMaker";

function App() {
  return (
    <div className="container-fluid">
      <div className="App">
        <Layout>
          <BurgerMaker />
        </Layout>
      </div>
    </div>
  );
}

export default App;
