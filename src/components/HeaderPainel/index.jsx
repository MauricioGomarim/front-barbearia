import { Container, Content } from "./styles";
import logo from "../../assets/logo.png";
import perfil from "../../assets/Vector.svg";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../hook/auth.jsx";
import { Link } from "react-router-dom";
import { BsScissors, BsGrid3X3GapFill } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";

export function HeaderPainel() {


  return (
    <Container>
      <Content>
        <div className="logo">
          <a href="/">
            <img src={logo} />
          </a>
        </div>
      </Content>
    </Container>
  );
}
