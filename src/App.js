import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";
import { useState } from "react";
import data from "./data";

function App() {
  const [tour, setTour] = useState(data);

  return (
    <div className="  mx-auto max-w-[1200px]">
       <p>Test</p>
      <Header />
      <Card tour={tour} />
    </div>
  );
}

export default App;
