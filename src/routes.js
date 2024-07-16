import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import NovoVideo from "./pages/NovoVideo";
import Header from "./components/Header";
import Footer from "./components/Footer";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/NovoVideo" element={<NovoVideo/>}></Route>
            </Routes>
            <Footer/> 
        </BrowserRouter>
    )
}

export default AppRoutes;