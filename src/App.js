import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./sections/LandingPage";

function App() {
  return (
    <>
      <div id="app">
        <Navbar/>

        {/* Landing Page */}
        <LandingPage/>
      </div>
    </>
  );
}

export default App;
