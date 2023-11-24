import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        {/* <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </div>
  );
};

export default App;
