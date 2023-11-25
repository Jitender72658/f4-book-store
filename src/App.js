import React,{useState, useEffect} from "react";
import Navbar from "./Components/Navbar";
import Books from "./Components/Books";
import SelectedBookDisplay from "./Components/SelectedBookDisplay";

function App() {
   const [selectedBook, setSelectedBook] = useState("");
   const [searchInput, setSearchInput] = useState("harry+porter");
  return (
    <div className="App">
          <Navbar setSearchInput={setSearchInput}/>
          <SelectedBookDisplay selectedBook={selectedBook}/>
          <Books searchInput={searchInput} setSelectedBook={setSelectedBook}/>
    </div>
  );
}

export default App;
