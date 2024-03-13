import { Container } from "./styles";
import { HeaderPainel } from "../../../components/HeaderPainel";
import { Menu } from "../../../components/Menu";
import { useAuth } from "../../../hook/auth";
import { api } from "../../../services/api";
import { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import robo_green from "../../../assets/green.png";
import robo_red from "../../../assets/red.png";
import io from 'socket.io-client'


export function QrcodePage() {
  const { menuActive, setMenuActive } = useAuth();
  const [qrCode, setQrCode] = useState("");
  console.log(qrCode)
  // console.log(qrCode)
  
  useEffect(() => {
    const socket = io("http://localhost:3333");

    // Ouvir o evento "qr_code" emitido pelo servidor
    socket.on("qr_code", (data) => {
      // Atualizar o estado qrCode com o valor recebido do servidor
      setQrCode(data.qrCode);
    });

    // Retornar uma função de limpeza para desconectar o socket quando o componente for desmontado
    return () => {
      socket.disconnect();
    };
  }, [qrCode]);

  // useEffect(() => {
  //   const fetchQRCode = async () => {
  //     const response = await api.get("/qrcode");
  //     console.log(response);
  //     setQrCode(response.data.qrCode);
  //   };

  //   fetchQRCode();
  // }, []);
  return (
    <Container
      style={{ gridTemplateColumns: menuActive ? "250px auto" : "80px auto" }}
    >
      <HeaderPainel />
      <Menu />
      <div className="content flex flex-col justify-center items-center">
        <h1 className="text-[25px] mb-10 text-black font-bold">
          {qrCode == 'autenticado' ? (
  <h1>Autenticado!</h1>
          ) : (<h1>Escaneie o QRCode para ativar o robo de notificações!</h1>)}
          
        </h1>
        <div className="flex flex-wrap max-w-screen-md">
          <div className="w-full lg:w-3/6 flex justify-center">
            {qrCode == "autenticado" ? (
              <img src={robo_green} alt="" className="max-w-80 lg:max-w-full "/>
            ) : (
              <img src={robo_red} alt="" className="max-w-80 lg:max-w-full " />
            )}
          </div>
          <div className="w-full lg:w-3/6 flex flex-col items-center">
            {qrCode == "autenticado" ? (
              <QRCode value={''} size={400} className="opacity-50" />
            ) : qrCode == null ? (
              <><h1>Gerando QRCode</h1></>
            ) : (
              <QRCode value={qrCode} size={400} />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
