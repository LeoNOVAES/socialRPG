import React,{useEffect, useState} from 'react';
import "../styles/banner.css";
import api from "../services/api";
import swal from 'sweetalert';

export default function Form(){
    

        const [email, setEmail] = useState('');
        const [name, setName] = useState("");
        const [bio, setBio] = useState("");
        const [password, setPassword] = useState("");
        const [estado, setEstado] = useState("");
        const [mestre, setMestre] = useState(0);
        const [avatar, setAvatar] = useState("");
        const [validation, setValidation] = useState(false); 

        function change(e){
            window.location.reload();
        }

        async function handlerCadastro({ history }){
                
            if (name.length == 0 || email.length == 0 || avatar.length == 0 || bio.length == 0 || password.length == 0 || estado.length == 0) {
                setValidation(true);
                return;
            }

            setValidation(false);
            console.log(avatar)    
            const form = new FormData();
            form.append("name", name);
            form.append("email", email);
            form.append("bio",bio);
            form.append("password", password);
            form.append("mestre",mestre);
            form.append("estado", estado);
            form.append("avatar", avatar);

            const response = await api.post("/api/user", form, {
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            });

            swal({
                title: response.data.message,
                text: "Faca o login agora mesmo!",
                icon: "success",
                button: "ok",
            });
        }

        return (
            <div className="card text formCard">
                <div className="card-header bg-success  text-light cabForm">
                    <a href="#" onClick={()=>change("buttons")} > <p>Voltar</p> </a>
                    <div className="custom-file">
                        <input type="file" onChange={e => setAvatar(e.target.files[0])} className="custom-file-input" id="customFile"/>
                        <label className="custom-file-label" >Escolha a foto de seu avatar</label>
                    </div>
                </div>
                <div className="card-body">
                    {
                        validation ? (<div className="bg-danger text-light validation"> Todos campos devem estar preenchidos </div>):<div></div> 
                    }
                    <form>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        value={email}
                                        className="form-control" 
                                        placeholder="Email"
                                        onChange={e => setEmail(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>NickName</label>
                                    <input 
                                        value={name}
                                        onChange={e => setName(e.target.value)} 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Nick Name"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Password</label>
                                    <input 
                                        value={password}
                                        type="password" 
                                        className="form-control" 
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="Password"
                                    />
                                </div>  
                            </div>
                            <div className="col-sm-6">
                                <label >Voce e um mestre?</label>
                                <div className="form-check">
                                    <input 
                                        type="checkbox" 
                                        className="form-check-input"
                                        value="1"
                                        onChange={e => setMestre(e.target.value)}
                                    />
                                    <label className="form-check-label" >Sim</label>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>UF</label>
                                    <select 
                                        className="custom-select custom-select-lg"
                                        value={estado}
                                        onChange={e=>setEstado(e.target.value)}
                                    >
                                        <option value="DF">DF</option>
                                        <option value="SP">SP</option>
                                        <option value="MG">MG</option>
                                        <option value="RJ">RJ</option>
                                        <option value="AC">AC</option>
                                        <option value="GO">GO</option>
                                    </select>
                                </div>
                            </div> 
                            <div className="col-sm-12"> 
                                <div className="form-group">
                                    <label >Descrição breve sobre você como jogador</label>
                                    <textarea 
                                        className="form-control"
                                        value={bio}  
                                        rows="3"
                                        onChange={ e => setBio(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <button className="btn btn-primary" type="button" onClick={()=>{ handlerCadastro() }}>Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    