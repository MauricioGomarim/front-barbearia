import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { Datas } from '../pages/Usuario/Datas'
import { Reservas } from '../pages/Usuario/Reservas'
import { Servicos } from '../pages/Usuario/Serviços'
import { Header } from "../components/Header/index.jsx";
import { Footer } from "../components/Footer/index.jsx";



export function AppRoutes(){
    
    return (
        <Routes>
            <Route path="/" element={<><Header /><Home /> <Footer /></>} />
            <Route path="/datas" element={<><Header /><Datas /><Footer /></>} />
            <Route path="/minhas-reservas" element={<><Header /><Reservas /><Footer /></>} />
            <Route path="/servicos" element={<><Header /><Servicos /><Footer /></>} />
        </Routes>
    )
}
