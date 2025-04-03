import home from "./pages/home/home.mjs";
import configEmail from "./pages/config-email/config-email.mjs";
import pageExtrairEstoque from "./pages/extrair-estoque/page-extrair-estoque.mjs";
import pageCorrigirEstoque from "./pages/corrigir-estoque/page-corrigir-estoque.mjs"

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
                main.appendChild(pageExtrairEstoque());
                break;
            case "#CorrigirEstoque":
                main.appendChild(pageCorrigirEstoque());
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
