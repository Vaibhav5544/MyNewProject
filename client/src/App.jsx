
import './App.css';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/signup';
import Home from './pages/home';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}  ></Route>
          <Route path="/login" element={<Login />}  ></Route>
          <Route path="/Signup" element={<Signup />}></Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
