import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import HomeForms from './components/HomeForms';
import AllProducts from "./components/AllProducts.js";
import Dynamic from "./components/Dynamic.js";


function App() {

  return (
    <div className="App" id="ss">


      <BrowserRouter>
        {/* {!localStorage.getItem('items') ? <Route path="/login" element={<Login />} /> : <> */}
          <Header />
          <Sidebar />
          <Routes>

            <Route path="/dynamic" element={<><Dynamic /></>} />
            <Route path="/" element={<><Home /></>} />
            <Route path="/login" element={<Login />} />
            <Route path="/add-product" element={<><HomeForms /></>} />
            <Route path="/all-products" element={<><AllProducts /></>} />

          </Routes>
       
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
