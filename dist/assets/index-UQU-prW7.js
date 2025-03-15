(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=()=>{const n=document.createElement("div"),i=`
    <h1>Configuração de Email</h1>
    `;return n.innerHTML=i,n},d=()=>{const n=document.createElement("div"),i=`
<h2>Extrair Estoque</h2>

<div>
    <h3>Selecione um arquivo SPED FISCAL</h3>
    <h4 class="font-alerta">Certifique-se de ter <mark>validado o arquivo SpedFiscal antes!</mark></h4>
    <p>
        <h4><i>Para o arquivo CSV não é necessário a pré-validação.</i></h4>
    </p>
    <label for="fileSped">Selecione o arquivo:</label>
    <input type="file" id="fileSped" name="fileSped" accept=".txt" onChange="lerArquivoSpedFiscal(this.files)"><br><br>
    <div class="button-inline-block">
        <button class="default-button button-inline-block" onclick="extrairIventarioSpedFiscal()">Extrair no Formato SPEDFISCAL</button>
        <button class="default-button-green button-inline-block" onclick="extrairInventarioCsv()">Extrair no Formator CSV  <i class="fa fa-file"></i></button>
    </div>
</div>

    `;return n.innerHTML=i,n},a=()=>{const n=document.createElement("div"),i=`
    <h1>Home</h1>
    `;return n.innerHTML=i,n},o=document.getElementById("main"),u=()=>{window.addEventListener("hashchange",()=>{switch(o.innerHTML="",window.location.hash){case" ":o.appendChild(a());break;case"#ConfiguracoesEmail":o.appendChild(l());break;case"#ExtrairEstoque":o.appendChild(d());break;default:o.appendChild(a())}})};window.addEventListener("load",()=>{o.appendChild(a()),u()});
