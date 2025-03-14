import configEmail from "./pages/config-email/config-email.mjs";
import extrairEstoque from "./pages/extrair-estoque/extrair-estoque.mjs";
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
                console.log('Page config');
                main.appendChild(configEmail());
                break;
            case "#ExtrairEstoque":
                console.log('Page config');
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
