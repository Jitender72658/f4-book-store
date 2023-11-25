import React,{useState, useEffect} from "react";
import Navbar from "./Components/Navbar";
import Books from "./Components/Books";

function App() {
   const [selectedBook, setSelectedBook] = useState("");
   const [searchInput, setSearchInput] = useState("harry+porter");
  return (
    <div className="App">
          <Navbar setSearchInput={setSearchInput}></Navbar>
          <Books searchInput={searchInput}></Books>
    </div>
  );
}

export default App;
