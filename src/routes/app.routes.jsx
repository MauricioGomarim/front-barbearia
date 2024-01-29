import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { Datas } from '../pages/Usuario/Datas'
import { Reservas } from '../pages/Usuario/Reservas'
import { Servicos } from '../pages/Usuario/Serviços'
import { Header } from "../components/Header/index.jsx";
import { Footer } from "../components/Footer/index.jsx";

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

import { useAuth } from "../hook/auth.jsx";


export function AppRoutes(){

    const { user } = useAuth();

    return (
        <Routes>
            <Route path="/login" element={user ? <Home />  : <SignIn />} />   
            <Route path="/register" element={user ? <><Header /><Home /> <Footer /></> : <SignUp />} />   

            <Route path="/" element={<><Header /><Home /> <Footer /></>} />
            <Route path="/datas" element={<><Header /><Datas /><Footer /></>} />
            <Route path="/minhas-reservas" element={<><Header /><Reservas /><Footer /></>} />
            <Route path="/servicos" element={<><Header /><Servicos /><Footer /></>} />
        </Routes>
    )
}
