import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { Datas } from '../pages/Usuario/Datas'
import { Reservas } from '../pages/Usuario/Reservas'
import { Servicos } from '../pages/Usuario/Serviços'
import { Not_found } from "../pages/not_found"
import { Sucess_reserva } from "../pages/Usuario/Sucess_reserva"

import { Dados } from "../pages/Dados"
import { Gerenciar_servicos } from "../pages/Barbeiro/Gerenciar_serviços"


import { Perfil } from '../pages/Painel/Perfil'
import { ServicosPainel } from '../pages/Painel/ServicosPainel'
import { Dashboard } from '../pages/Painel/Dashboard'
import { Solicitacoes } from '../pages/Painel/Solicitacoes'
import { Agendamentos } from '../pages/Painel/Agendamentos'






import { Header } from "../components/Header/index.jsx";
import { Footer } from "../components/Footer/index.jsx";
import { HeaderPainel } from "../components/HeaderPainel";

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

import { useAuth } from "../hook/auth.jsx";


export function AppRoutes(){

    const { user, servicesSelectedHook } = useAuth();
    return (
        <Routes>
            <Route path="/login" element={user ? (user.isBarbeiro ? <Dashboard /> : <><Header /><Home /><Footer /></>) : <SignIn />} />   
            <Route path="/register" element={user ? <><Header /><Home /> <Footer /></> : <SignUp />} />   


            <Route path="/minhas-reservas" element={user ? <><Header /><Reservas /> <Footer /></> : <Not_found />} />
            <Route path="/dados" element={user ? <Dados />  : <Not_found />} />

            <Route path="/gerenciar-servicos" element={ user?.isBarbeiro ? <Gerenciar_servicos />  : <Not_found />} />

            <Route path="/" element={<><Header /><Home /> <Footer /></>} />
            <Route path="/datas" element={servicesSelectedHook != '' ? <><Header /><Datas /><Footer /></> : <><Header />< Servicos/><Footer /></>} />
            <Route path="/servicos" element={<><Header /><Servicos /><Footer /></>} />

            <Route path="*" element={<Not_found />} />

            <Route path="/dashboard-painel" element={ user?.isBarbeiro ? <Dashboard />  : <><Header /><Home /><Footer /></>} />
            <Route path="/perfil-barbeiro" element={ user?.isBarbeiro ? <Perfil />  : <><Header /><Home /><Footer /></>} />
            <Route path="/servicos-painel" element={ user?.isBarbeiro ? <ServicosPainel />  : <><Header /><Home /><Footer /></>} />
            <Route path="/solicitacoes-painel" element={ user?.isBarbeiro ? <Solicitacoes />  : <><Header /><Home /><Footer /></>} />
            <Route path="/agendamentos-painel" element={ user?.isBarbeiro ? <Agendamentos />  : <><Header /><Home /><Footer /></>} />
            <Route path="/sucess" element={<Sucess_reserva />} />
        </Routes>
    )
}
