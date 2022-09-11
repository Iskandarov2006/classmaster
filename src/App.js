import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Footer from './pages/footer'
import Teachers from "./pages/Teachers";
import './style.css'
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/course" element={<Course />} />
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
