import { BrowserRouter } from "react-router-dom";
// import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.rotes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../hook/auth.jsx";


import { Header } from "../components/Header/index.jsx";
import { Footer } from "../components/Footer/index.jsx";

export function Routes() {

  const { user } = useAuth();


  return <BrowserRouter>{user ? <AppRoutes /> : <><AppRoutes /> <AuthRoutes /></>}</BrowserRouter>;
}
