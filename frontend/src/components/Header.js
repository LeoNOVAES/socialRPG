
import React from 'react';
import Logo from "../rpg/logo.png";

import "../styles/home.css";

export default function Home() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light text-white bg-light">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#textoNavbar" aria-controls="textoNavbar" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="textoNavbar">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(Página atual)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Matchs</a>
                </li>               
                </ul>
                <span class="navbar-text">
                    PERFIL
                </span>
            </div>
        </nav>
    );
}
