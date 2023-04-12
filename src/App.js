import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <div>
      <Header></Header>
      <h2>Let's get started!</h2>
      <main>
      <Meals></Meals>
      </main>
    </div>
  );
}

export default App;
