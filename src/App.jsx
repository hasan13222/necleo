import "./App.css";
import Body from "./components/Body";
import LeftBar from "./components/LeftBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <div className="leftbar_body flex">
        <LeftBar />
        <Body />
      </div>
    </>
  );
}

export default App;
