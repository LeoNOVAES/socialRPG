import React,{useEffect, useState} from 'react';
import "../styles/banner.css";
import api from "../services/api";
import swal from 'sweetalert';

export default function Entrar({ history }){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [validation, setValidation] = useState(false);  

      function change() {
          window.location.reload();
      }

      async function handlerAuth(){
          try{
                if (email.length == 0 || password.length == 0){
                    setValidation(true);  
                    return;
                }

                const data = {
                    email,
                    password
                }
            
                const response = await api.post("/api/auth", data);
                console.log(response)

                localStorage.setItem("token",response.data.token);
                localStorage.setItem("id", response.data.user._id);
                localStorage.setItem("avatar", response.data.user.avatar);
                localStorage.setItem("name", response.data.user.name);

                history.push("/home")
          
            }catch(e){

               swal({
                   title: "Atencao!",
                   text: "Email ou senha Incorretos",
                   icon: "warning",
                   button: "ok",
               });
               return;
          }
         

          
      }

      return(
        <div className="card text entrarCard">
            
            <div className="card-header bg-success  text-light headerCard">
                <a onClick={()=>change()} href="#"> <p>Voltar</p> </a>
            </div>
            <div className="card-body">
                {
                    validation ? < div class = "bg-danger text-light validation" > Todos campos devem estar preenchidos </div> :<div></div >
                }
                <form>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Enter email"
                                    value={email}
                                    onChange = {e => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label >Senha</label>
                                <input 
                                    type="password" 
                                    className="form-control"  
                                    placeholder="senha"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-sm">
                            <button type="button" onClick={()=>handlerAuth()} className="btn btn-primary" >Entrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      );
    }