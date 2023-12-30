import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import LeftBar from "./components/LeftBar";
import TopBar from "./components/TopBar";

function App() {
  const [collapseLeftBar, setCollapseLeftBar] = useState(false);
  return (
    <>
      <TopBar collapseLeftBar={collapseLeftBar} setCollapseLeftBar={setCollapseLeftBar} />
      <div className="leftbar_body flex">
        <LeftBar collapseLeftBar={collapseLeftBar} setCollapseLeftBar={setCollapseLeftBar} />
        <Body />
      </div>
    </>
  );
}

export default App;
