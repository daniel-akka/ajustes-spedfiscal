(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const s=()=>{const n=document.createElement("div"),o=`
    <h1>Configuração de Email</h1>
    `;return n.innerHTML=o,n},d=()=>{const n=document.createElement("div"),o=`
<h2>Extrair Estoque</h2>

<div>
    <h3>Selecione um arquivo SPED FISCAL</h3>
    <h4 class="font-alerta">Certifique-se de ter <mark>validado o arquivo SpedFiscal antes!</mark></h4>
    <label for="fileSped">Selecione o arquivo:</label>
    <input type="file" id="fileSped" name="fileSped" accept=".txt" onChange="lerArquivoSpedFiscal(this.files)"><br><br>
    <div class="button-inline-block">
        <button class="default-button button-inline-block" onclick="extrairIventarioSpedFiscal()">Extrair no Formato SPEDFISCAL</button>
        <button class="default-button-green button-inline-block" onclick="extrairInventarioCsv()">Extrair no Formator CSV  <i class="fa fa-file"></i></button>
    </div>
</div>

    `;return n.innerHTML=o,n},a=()=>{const n=document.createElement("div"),o=`
    <h1>Home</h1>
    `;return n.innerHTML=o,n},i=document.getElementById("main"),u=()=>{window.addEventListener("hashchange",()=>{switch(i.innerHTML="",window.location.hash){case" ":i.appendChild(a());break;case"#ConfiguracoesEmail":console.log("Page config"),i.appendChild(s());break;case"#ExtrairEstoque":console.log("Page config"),i.appendChild(d());break;default:i.appendChild(a())}})};window.addEventListener("load",()=>{i.appendChild(a()),u()});
