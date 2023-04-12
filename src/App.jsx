import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  // const [count, setCount] = useState(0)
  // [#D85C36]
  return (
    <div
      className=" min-w-[375px] max-w-[1440px] min-h-[100vh]  font-['Poppins'] 
    bg-[#1b0143] text-white "
    >
      <NavBar />

      <Home />
      <Footer />
    </div>
  );
}

export default App;
