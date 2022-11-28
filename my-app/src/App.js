import Navbar from "./navigation/navbar";
import Content from "./content";
import Interests from "./interests";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <Interests />
    </div>
  );
}

export default App;
