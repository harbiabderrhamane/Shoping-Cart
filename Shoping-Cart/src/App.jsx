import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import ShopingCartUse from "./context/ShopingCartContext";
import About from "./pages/About";
function App() {
  return (
    // now all of the routes will have accsess to whatever the value of the provider is
    <ShopingCartUse>
      <Container>
        <Navbar></Navbar>
        <Routes>
          <Route path="/store" element={<Store />} />
          <Route path="/Cart" element={<About />} />
        </Routes>
      </Container>
    </ShopingCartUse>
  );
}

export default App;
