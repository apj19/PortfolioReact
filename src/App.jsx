import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  // const [count, setCount] = useState(0)
  // [#D85C36]
  return (
    <div
      className=" min-w-[375px] max-w-[1440px] min-h-[100vh]   font-['Inter']
    bg-[#1b0143] text-white "
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/experience" element={<Experience />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
