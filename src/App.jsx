import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/CustomFooter";
import BookList from "./components/ BookList";
import fantasy from "./data/fantasy.json";
console.log(fantasy);

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <BookList books={fantasy} />
      <Footer />
    </div>
  );
}

export default App;
