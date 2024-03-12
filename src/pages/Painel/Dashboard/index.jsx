import { Container } from "./styles";
import { HeaderPainel } from "../../../components/HeaderPainel";
import { Menu } from "../../../components/Menu";
import { useAuth } from "../../../hook/auth";
import { api } from "../../../services/api";
import { useEffect, useState } from "react";
import QRCode from "qrcode.react";

export function Dashboard() {
  const { menuActive, setMenuActive } = useAuth();


  return (
    <Container
      style={{ gridTemplateColumns: menuActive ? "250px auto" : "80px auto" }}
    >
      <HeaderPainel />
      <Menu />
      <div className="content">
       
      </div>
    </Container>
  );
}
