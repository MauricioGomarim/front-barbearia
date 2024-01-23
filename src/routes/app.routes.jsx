import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { Datas } from '../pages/Usuario/Datas'
import { Reservas } from '../pages/Usuario/Reservas'
import { Servicos } from '../pages/Usuario/Serviços'




export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/datas" element={<Datas />} />
            <Route path="/minhas-reservas" element={<Reservas />} />
            <Route path="/servicos" element={<Servicos />} />
        </Routes>
    )
}
