import "./App.css";
import Navbar from "./components/Navbar";
import Blogs from "./sections/Blogs";
import Featured from "./sections/Featured";
import Growth from "./sections/Growth";
import LandingPage from "./sections/LandingPage";

function App() {
  return (
    <>
      <div id="app">
        <Navbar/>

        {/* Landing Page */}
        <LandingPage/>

        {/* Featured Section */}
        <Featured/>

        <Blogs/>

        <Growth/>
      </div>
    </>
  );
}

export default App;
