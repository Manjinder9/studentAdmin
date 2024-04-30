import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, BrowserRouter, Routes} from "react-router-dom"
import Navbar from "./layout/navbar";
import Home from "./layout/home";
import Student from "./layout/student";
import Manage from "./layout/manage";

function App() {
  return (
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route exact path = "/" element={<Home></Home>}>
            </Route>
            <Route exact path = "/students" element={<Student></Student>}>
            </Route>
            <Route exact path = "/manage" element={<Manage></Manage>}>
            </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
