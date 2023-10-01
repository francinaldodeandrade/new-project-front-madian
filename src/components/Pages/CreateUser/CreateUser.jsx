import React from "react";
import "./CreateUser.css";

export default function CreateUser() {
  return (
    <section>
      <div className="container">
        <div className="box-main">
          <form class="form_createUser">
            <div className="temp_header">
              <h2>Cadastro Usuário</h2>
              <img src="" alt="" />
            </div>
            <div class="input_createUser">
              <label for="input_fn">Nome</label>
              <input
                type="text"
                class="inputFirstName"
                id="input_fn"
                placeholder="digite seu nome "
              />
              <label for="input_ln">Sobrenome</label>
              <input
                type="text"
                class="inputLastName"
                id="input_ln"
                placeholder="digite seu sobrenome "
              />
              <label for="inputFone">Wattsapp</label>
              <input
                type="text"
                class="input_Fone"
                id="inputFone"
                placeholder="digite seu DDD + Numero "
              />
              <label for="inputInsta">Instagran</label>
              <input
                type="text"
                class="input_Insta"
                id="inputInsta"
                placeholder="digite seu @Instagran "
              />
              <label for="inputPassword">Senha</label>
              <input
                type="text"
                class="input_password"
                id="inputPassword"
                placeholder="digite sua senha "
              />

              <label for="inputConfPass">Confirmar senha</label>
              <input
                type="text"
                class="input_ConfPass"
                id="inputConfPass"
                placeholder="confirme sua senha"
              />
            </div>
            <div className="button">
              <button className="btn" id="entry" type="submit">
                Enviar
              </button>
              <button className="btn" id="create" type="submit">
                Proximo
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
