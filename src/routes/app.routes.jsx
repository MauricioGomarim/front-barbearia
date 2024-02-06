import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { Datas } from '../pages/Usuario/Datas'
import { Reservas } from '../pages/Usuario/Reservas'
import { Servicos } from '../pages/Usuario/Serviços'
import { Not_found } from "../pages/not_found"
import { Dados } from "../pages/Dados"
import { Gerenciar_servicos } from "../pages/Barbeiro/Gerenciar_serviços"



import { Header } from "../components/Header/index.jsx";
import { Footer } from "../components/Footer/index.jsx";


import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

import { useAuth } from "../hook/auth.jsx";


export function AppRoutes(){

    const { user } = useAuth();

    return (
        <Routes>
            <Route path="/login" element={user ? <><Header /><Home /> <Footer /></>  : <SignIn />} />   
            <Route path="/register" element={user ? <><Header /><Home /> <Footer /></> : <SignUp />} />   


            <Route path="/minhas-reservas" element={user ? <><Header /><Reservas /> <Footer /></> : <Not_found />} />
            <Route path="/dados" element={user ? <Dados />  : <Not_found />} />

            <Route path="/gerenciar-servicos" element={ user?.isBarbeiro ? <Gerenciar_servicos />  : <Not_found />} />

            


            <Route path="/" element={<><Header /><Home /> <Footer /></>} />
            <Route path="/datas" element={<><Header /><Datas /><Footer /></>} />
            <Route path="/servicos" element={<><Header /><Servicos /><Footer /></>} />

            <Route path="*" element={<Not_found />} />
        </Routes>
    )
}