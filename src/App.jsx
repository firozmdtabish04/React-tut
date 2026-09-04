import { Routes, Route } from "react-router-dom";
import ClassComponent from "./component/ClassComponent";
import Tutorial from "./component/Tutorial";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Props from "./component/Props";
import ObjeProps from "./component/ObjeProps";
import Course from "./component/Course";
import HooksComp from "./component/hook/HooksComp";
import Form from "./component/Form";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Tutorial /> */}
      {/* <Footer /> */}

      {/* <ClassComponent /> */}

      {/* <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/classcomponent" element={<ClassComponent />} />
      </Routes> */}

      {/* <Props /> */}
      {/* <ObjeProps /> */}

      {/* <Course /> */}

      {/* <HooksComp /> */}
      <Form />
    </>
  );
}
export default App;
