import { Routes, Route } from "react-router-dom";
import ClassComponent from "./component/ClassComponent";
import Tutorial from "./component/Tutorial";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Tutorial /> */}
      {/* <Footer /> */}

      {/* <ClassComponent /> */}

      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/classcomponent" element={<ClassComponent />} />
      </Routes>
    </> 
  );
}
export default App;
