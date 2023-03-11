import LeftNavbar from "./Components/Navbars/LeftNavbar";
import RightNavbar from "./Components/Navbars/RightNavbar";
import MobileNavBar from "./Components/Navbars/MobileNavBar";

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

function App() {
  // const [count, setCount] = useState(0)
  // [#D85C36]
  return (
    <div
      className=" bg-cover bg-center bg-no-repeat  min-w-[375px] max-w-[1440px] min-h-[100vh] text-white font-['Poppins] flex justify-center items-center "
      style={{ backgroundImage: `url('./main_bg.png')` }}
    >
      <LeftNavbar />
      <RightNavbar />
      <MobileNavBar />

      <Routes>
        <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
