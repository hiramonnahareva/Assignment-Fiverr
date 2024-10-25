import { Route, Routes } from "react-router-dom";
// import UserDashboard from "./UserDashboard";
// import TravelPreferences from "./TravelPreference";
// import Hero from "../Home";
import Footer from "./components/Footer";
import Home from "./Home";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/preferences" element={<TravelPreferences />} /> */}
        {/* ... */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
