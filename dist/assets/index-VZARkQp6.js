(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=()=>{const o=document.createElement("div"),n=`
    <h1>Configuração de Email</h1>
    `;return o.innerHTML=n,o},d=()=>{const o=document.createElement("div"),n=`
<h2>Extrair Estoque</h2>

<div>
    <h3>Selecione um arquivo SPED FISCAL</h3>
    <h4 class="font-alerta">Certifique-se de ter <mark>validado o arquivo SpedFiscal antes!</mark></h4>
    <label for="fileSped">Selecione o arquivo:</label>
    <input type="file" id="fileSped" name="fileSped" accept=".txt" onChange="lerArquivoSpedFiscal(this.files)"><br><br>
    <button class="default-button" onclick="extrairIventarioSpedFiscal()">Extrair o Inventário</button>
</div>

    `;return o.innerHTML=n,o},a=()=>{const o=document.createElement("div"),n=`
    <h1>Home</h1>
    `;return o.innerHTML=n,o},r=document.getElementById("main"),u=()=>{window.addEventListener("hashchange",()=>{switch(r.innerHTML="",console.log(window.location.hash),window.location.hash){case" ":r.appendChild(a());break;case"#ConfiguracoesEmail":console.log("Page config"),r.appendChild(l());break;case"#ExtrairEstoque":console.log("Page config"),r.appendChild(d());break;default:r.appendChild(a())}})};window.addEventListener("load",()=>{r.appendChild(a()),u()});
