(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const u=()=>{const o=document.createElement("div"),n=`
    <h1>Configuração de Email</h1>
    `;return o.innerHTML=n,o},f=()=>{const o=document.createElement("div"),n=`
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
    `;return o.innerHTML=n,o};var c=new Map;c.set("|0","|0990|");c.set("|990","|9900|9900|");var l=new Map;l.set("|C001|","|C001|1|");l.set("|C990|","|C990|2|");const r=document.getElementById("main"),p=()=>{window.addEventListener("hashchange",()=>{switch(r.innerHTML="",console.log(window.location.hash),window.location.hash){case" ":r.appendChild(a());break;case"#ConfiguracoesEmail":console.log("Page config"),r.appendChild(u());break;case"#ExtrairEstoque":console.log("Page config"),r.appendChild(f());break;default:r.appendChild(a())}})};window.addEventListener("load",()=>{r.appendChild(a()),p()});
