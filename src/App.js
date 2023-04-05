import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

// Page Default
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"

//JAva Script
import JIntroduction from "./pages/Javascipt/Introduction"
import JSStatements from "./pages/Javascipt/Statements"
import JSSyntax from "./pages/Javascipt/Syntax"
import JSVariables from "./pages/Javascipt/Variables"
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
              <Route path="statements" element={<JSStatements />} />
              <Route path="syntax" element={<JSSyntax />} />
              <Route path="variables" element={<JSVariables />} />
            </Route>



          </Route>

        </Routes>
      </Router>
    </>

  );
}

export default App;
