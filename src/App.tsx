import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./components/Home/Home";
import { Form } from "./components/Form/Form";
import AOS from "aos";

import "./App.css";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

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
