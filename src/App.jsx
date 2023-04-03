import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  // const [count, setCount] = useState(0)
  // [#D85C36]
  return (
    <div className=" bg-cover bg-center bg-no-repeat  min-w-[375px] max-w-[1440px] min-h-[100vh]  font-['Poppins'] bg-gray-50  ">
      <NavBar />

      <Home />
    </div>
  );
}

export default App;
