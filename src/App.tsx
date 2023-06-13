import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Form } from "./components/Form/Form";
import "./App.css";
import "aos/dist/aos.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/contact" element={<Form />} />;
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
