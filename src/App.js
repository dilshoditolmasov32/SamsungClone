import "./App.css";
import Banner from "./banner/Banner";
import Card from "./cards/Card";

function App() {
  return (
    <div className="App">
      <Card />
      <Banner
        Title={"Mobile & Computing"}
        bg={"#007aff"}
        card_text={"Galaxy S24 Ultra"}
        card_desc={
          "Get up to $750 trade-in credit and $75 instant Samsung Credit with participating carriers."
        }
        card_btn={"Buy now"}
      />
      <Banner Title={"TV & Audio"} bg={"red"} />
    </div>
  );
}

export default App;
