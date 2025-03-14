import configEmail from "./pages/config-email/config-email.mjs";
import extrairEstoque from "./pages/extrair-estoque/page-extrair-estoque.mjs";
import home from "./pages/home/home.mjs";

const main = document.getElementById("main");

const init = () => {

    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch(window.location.hash){
            case " ": 
            main.appendChild(home());
            break;
            case "#ConfiguracoesEmail":
                main.appendChild(configEmail());
                break;
            case "#ExtrairEstoque":
                main.appendChild(extrairEstoque());
                break;
            default:
                main.appendChild(home());
        }
    })

    
}

window.addEventListener("load", () => {
    
    main.appendChild(home());
    init();
});
