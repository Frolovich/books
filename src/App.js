import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddBooks from "./containers/AddBooks";
import Search from "./containers/Search";
 



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<AddBooks />} />
          <Route path="/search" element={<Search />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
