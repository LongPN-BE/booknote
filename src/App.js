import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

// Page Default
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"

//JAva Script
import JIntroduction from "./pages/Javascipt/Introduction"
import JSStatement from "./pages/Javascipt/Statements"
import JSImage from "./pages/Javascipt/Image"
function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />


            {/*Route For JavaScript*/}
            <Route path='js' >
              <Route index element={<JIntroduction />} />
              <Route path="statement" element={<JSStatement />} />
              <Route path="img" element={<JSImage />} />
            </Route>



          </Route>

        </Routes>
      </Router>
    </>

  );
}

export default App;
