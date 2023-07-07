import "./App.css";
import Navbar from "./components/Navbar";
import Blogs from "./sections/Blogs";
import Featured from "./sections/Featured";
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

      </div>
    </>
  );
}

export default App;
