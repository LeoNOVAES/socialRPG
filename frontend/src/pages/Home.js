import React, {Component} from 'react';
import Logo from "../rpg/logo.png";
import Header from "../components/Header";
import banner from "../rpg/banner4.jpg"
import like from "../rpg/like.svg"
import dislike from "../rpg/dislike.svg"


import "../styles/home.css";

export default function Home() {
    return(
        <div>
            <Header/>
            <div class="logoContain">
                <img src={Logo} />
            </div>
            <div className="main-container container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card main" >
                            <img class="card-img-top" src={banner} alt="Card image cap"/>
                            <div class="card-body">
                                <h4>Title</h4>
                                <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card'</p>
                            </div>
                            <div class="card-footer">
                                <div class="btns">
                                    <button><img src={like}/></button>
                                    <button><img src={dislike}/></button>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

