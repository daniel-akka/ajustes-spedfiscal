(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=()=>{const n=document.createElement("div"),r=`
    <h1>Configuração de Email</h1>
    `;return n.innerHTML=r,n},d=()=>{const n=document.createElement("div"),r=`
<h2>Extrair Estoque</h2>

<div>
    <h3>Selecione um arquivo SPED FISCAL</h3>
    <h4 class="font-alerta">Certifique-se de ter <mark>validado o arquivo SpedFiscal antes!</mark></h4>
    <label for="fileSped">Selecione o arquivo:</label>
    <input type="file" id="fileSped" name="fileSped" accept=".txt" onChange="lerArquivoSpedFiscal(this.files)"><br><br>
    <button class="default-button" onclick="extrairIventarioSpedFiscal()">Extrair o Inventário</button>
</div>

    `;return n.innerHTML=r,n},a=()=>{const n=document.createElement("div"),r=`
    <h1>Home</h1>
    `;return n.innerHTML=r,n},i=document.getElementById("main"),u=()=>{window.addEventListener("hashchange",()=>{switch(i.innerHTML="",window.location.hash){case" ":i.appendChild(a());break;case"#ConfiguracoesEmail":i.appendChild(l());break;case"#ExtrairEstoque":i.appendChild(d());break;default:i.appendChild(a())}})};window.addEventListener("load",()=>{i.appendChild(a()),u()});
