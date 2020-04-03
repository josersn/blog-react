import React from 'react';
import { FaSearch, FaFacebookSquare, FaInstagram, FaTwitterSquare, FaSpotify } from "react-icons/fa";

import { Container, Top, Middle, Bottom, Search } from './styles';
import { date } from "../../util/Data";
export default function Header() {
  return (
    <Container>

        <Top>
            {date}
            <Search>
                <FaSearch size={20} color="#cecece"/>
                <input type="text" placeholder="Pesquise Artigos aqui"/>
            </Search>
        </Top>

        <Middle>
            <img src="" alt=""/>
            <img src="https://via.placeholder.com/728x90.png?text=Ad+Banner+729x90" alt="Banner de anúncio"/>
        </Middle>
        <Bottom>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Tecnologia</a></li>
                    <li><a href="/">Popular</a></li>
                    <li><a href="/">Mais</a></li>
                </ul>
            </nav>
            <nav>
                <FaFacebookSquare size={20} color="#cecece"/>
                <FaInstagram size={20} color="#cecece"/>
                <FaTwitterSquare size={20} color="#cecece"/>
                <FaSpotify size={20} color="#cecece"/>
            </nav>
        </Bottom>
    </Container>
  );
}
