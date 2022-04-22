import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";
import SignUp from "./Components/SignUp/SignUp";
import NotFound from "./Shared/NotFound/NotFound";
import Header from "./Shared/Header/Header";
import ServiceDetails from "./Components/Services/ServiceDetails";
import CheckOut from "./Components/CheckOut/CheckOut";
import RequireAuth from "./Components/LogIn/RequireAuth/RequireAuth";
import LogIn from "./Components/LogIn/LogIn/LogIn";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/checkout"element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
