import React from "react";
import "./Login.css";
//import logo from "../../img/img_leila.jpg";

export default function Login() {
  return (
    <section>
      <div className="container">
        <div className="box-right">
          <div id="box-login">
            <form class="form_login">
              <h2>Login</h2>
              <div class="input_login">
                <label for="inputUser">Usuário</label>
                <input
                  type="email"
                  class="input_user"
                  id="inputUser"
                  placeholder="digite seu e-mail "
                />

                <label for="inputPassword">Senha</label>
                <input
                  type="text"
                  class="input_password"
                  id="inputPassword"
                  placeholder="digite sua senha"
                />
              </div>
              <div className="button">
                <button className="btn" id="entry" type="submit">
                  Entrar
                </button>
                <button className="btn" id="create" type="submit">
                  Cadastre-se
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
