import "./App.css";
import Banner from "./banner/Banner";
import Card from "./cards/Card";
function App() {
  //
  return (
    <div className="App">
      <Card />
      <Banner Title={"Mobile & Computing"} bg={"#007aff"} />
      <Banner Title={"TV & Audio"} bg={"red"} />
    </div>
  );
}

export default App;
