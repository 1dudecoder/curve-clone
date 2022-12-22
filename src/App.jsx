import Main from "./components/pages/main/Main";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Pools from "./components/pages/pools/Pools";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pool" element={<Pools />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
