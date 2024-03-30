import "./index.css";
import { useState } from "react"
import Swal from "sweetalert2";
import usuarioService from "../../services/usuario-service";


// import { useLocation } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("admin@admin.com");
    const [senha, setSenha] = useState("123456");

    // const navigate = useLocation();


    const autenticar = () => {

        if (!email || !senha) {
            Swal.fire({
                icon: 'error',
                text: "Os campos de e-mail e senha são obrigatórios, verifique!"
            });
        }

        // Aqui tenho que me comunicar com o backend.
        usuarioService
            .autenticar(email, senha)
            .then(response => {
                usuarioService.salvarToken(response.data.token);
                usuarioService.salvarUsuario(response.data.usuario);
                window.location = "/";
                // navigate('/')


            })
            .catch(erro => {
                // Fazer alguma coisa em caso de erro 
            });
    };

    return (
        <div className="principal-container">
            <h1 className="principal">Faça login, <br /> Entre para o nosso time!!</h1>

            <div className="caixa-login">
                {/* Titulo da tela de login  */}
                <div className="titulo-login">
                    <h1 className="login">Login</h1>
                </div>

                {/* Grupo do email */}
                <div className="grupo">
                    <label for="email">E-mail:</label> <br />
                    <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Digite seu e-mail" />
                </div>

                {/* Grupo do senha */}
                <div className="grupo">
                    <label for="senha">Senha:</label> <br />
                    <input id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Digite sua senha" />
                </div>

                {/* Link para recuperar a senha */}
                <div className="esqueci-minha-senha">
                    <a href="#">Esqueci minha senha</a>
                </div>

                {/* Botão de entrar  */}
                <button id="btn-entrar" onClick={autenticar}>E N T R A R</button>

            </div>
            <footer>
                <div id="copyright">
                • Desenvolvido por <a href="https://github.com/Kuasne" target="_blank">@kuasne</a> durante o curso de Engenharia de Software © 2024 •
                </div>
            </footer>
        </div>
    );
}

export default Login;