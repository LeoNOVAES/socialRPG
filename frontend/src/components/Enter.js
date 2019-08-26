

export default function Entrar(){
    return(
      <div class="card text entrarCard">
          
          <div class="card-header bg-success  text-light headerCard">
              <a onClick={()=>changeComponent("buttons")} href="#"> <p>Voltar</p> </a>
          </div>
          <div class="card-body">
              <form>
                  <div class="row">
                      <div class="col-sm-6">
                          <div class="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                          </div>
                      </div>
                      <div class="col-sm-6">
                          <div class="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                          </div>
                      </div>
                      <div class="col-sm">
                          <button class="btn btn-primary" >Entrar</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
    );
  }