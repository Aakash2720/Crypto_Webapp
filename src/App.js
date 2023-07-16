import Home from "./Components/Home";
import CoinDetails from "./Components/CoinDetails";
import Coins from "./Components/Coins";
import Exchanges from "./Components/Exchanges";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/exchanges" element={<Exchanges />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
