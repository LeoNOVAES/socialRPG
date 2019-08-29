import React, {Component} from 'react';
import Logo from "../rpg/logo.png";
import Header from "../components/Header";
import banner from "../rpg/banner4.jpg"
import like from "../rpg/like.svg"
import dislike from "../rpg/dislike.svg"


import "../styles/home.css";


function Mestre(){
    return(
        <div class="container mestre-main">
            <form>
                <div class="custom-file form-group">
                    <input type="file" class="custom-file-input" id="validatedCustomFile" required/>
                    <label class="custom-file-label" for="validatedCustomFile">Adicione uma ilustração para a mesa(opcional)</label>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Nome</label>
                    <input type="text" class="form-control" id="nome"  placeholder="Nome"/>
                </div>
                <div class="form-group">
                    <label for="qtdPlayers">Quantidade de Jogadores</label>
                    <input type="number" class="form-control" id="qtdPlayers" placeholder="Quantidade de Jogadores"/>
                </div>
                <div class="form-group">
                    <label for="descricao">Descrição da Mesa</label>
                    <textarea class="form-control" id="descricao" rows="3"></textarea>
                </div>
                <button class="btn btn-secondary" >Adicionar Mesa</button>
            </form>
            <div>    
                <div className="jumbotron painel">
                    <h1>Painel do Mestre</h1>
                </div>
                <div class="card">
                    <div class="card-header">
                        Minhas Mesas
                    </div>
                    <div class="container-fluid">
                        <div class="card-body">
                            <div class="card-group">
                                <div class="row">
                                <div class="card r col-sm-4">
                                    <div class="shadowMesa"><button class="btn btn-danger">DELETAR</button><button class="btn btn-warning">EDITAR</button></div>
                                    <img class="card-img-top" src={banner} height="35%" alt="Card image cap"/>
                                    <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text text-dark">This card has supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                                <div class="card r col-sm-4">
                                    <div class="shadowMesa"><button class="btn btn-danger">DELETAR</button><button class="btn btn-warning">EDITAR</button></div>
                                    <img class="card-img-top" src={banner} height="35%" alt="Card image cap"/>
                                    <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text text-dark">This card has supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                                <div class="card r col-sm-4">
                                    <div class="shadowMesa"><button class="btn btn-danger">DELETAR</button><button class="btn btn-warning">EDITAR</button></div>
                                    <img class="card-img-top" src={banner} height="35%" alt="Card image cap"/>
                                    <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text text-dark">This card has supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                                <div class="card r col-sm-4">
                                    <div class="shadowMesa"><button class="btn btn-danger">DELETAR</button><button class="btn btn-warning">EDITAR</button></div>
                                    <img class="card-img-top" src={banner} height="35%" alt="Card image cap"/>
                                    <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text text-dark">This card has supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card"c id="cardMatchs">
                    <div class="card-body">
                        <h5 class="card-title">Matchs</h5>
                        <h6 class="card-subtitle mb-2 text-muted">confira suas mesas</h6>
                        <p class="card-text text-dark">Aceite as soliciatções de match e divirta-se</p>
                        <button href="#" class="btn btn-info">Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Player(){
    return(
        <div>
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
                                <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div class="card-footer">
                                <div class="btns">
                                    <button ><img src={like}/></button>
                                    <button     ><img src={dislike}/></button>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    return(
        <div>
            <Header/>
            <Mestre/>
        </div>
    );
}

