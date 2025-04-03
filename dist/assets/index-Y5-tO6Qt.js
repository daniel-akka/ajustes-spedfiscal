(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=c(e);fetch(e.href,a)}})();const n=()=>{const o=document.createElement("div"),t=`
    <h1>Home</h1>
    `;return o.innerHTML=t,o},s=()=>{const o=document.createElement("div"),t=`
    <h1>Configuração de Email</h1>
    `;return o.innerHTML=t,o},u=()=>{const o=document.createElement("div"),t=`
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

    `;return o.innerHTML=t,o},d=()=>{const o=document.createElement("div"),t=`
<h1>Correção do Estoque</h1>
<p>
    <h3>Selecione um arquivo SPED FISCAL. <strong class="font-alerta">Certifique-se de ter <mark>validado o arquivo SpedFiscal antes!</mark></strong></h3>
</p>
<div class="button-inline" >
    <label for="fileCorrigirEstoque">Selecione o arquivo de Inventário:</label>
    <input type="file" id="fileCorrigirEstoque" name="fileCorrigirEstoque" accept=".txt" onChange="lerArquivoSpedInventario(this.files)" class="custom-file-upload">
    <br><br>
    <div class="button-inline">
        <button class="default-button button-inline-block" onclick="visualizarIventario()">Visualizar Inventário</button>
    </div>
</div>
<br><br>
<div>
    <label for="total_estoque" class="font-bold">Total do Estoque:</label>
    <input type="text" name="total_estoque" id="total_estoque" 
    placeholder="0,00" class="value margin-botton-20px font-size-large background-color-info" />
</div>
<div class="box-alteracoes">
    <h4>Correções:</h4>
    <label for="opcao_alteracao" class="item-box-block">Opções de Alteração:</label>
    <select id="opcao_alteracao" name="opcao_alteracao" class="opcoes-alteracao item-box-block">
      <option value="quantidade">Quantidade</option>
      <option value="valor_unitario">Valor Unitário</option>
    </select>

    <label for="maior_quantidade" class="margin-left-10px item-box-block">Maior Quantidade:</label>
    <input type="text" name="maior_quantidade" id="maior_quantidade" placeholder="0,00" 
    class="text value item-box-block"/>
    <label for="maior_valorunitario" class="margin-left-10px item-box-block">Maior Valor Unitário:</label>
    <input type="text" name="maior_valorunitario" id="maior_valorunitario" placeholder="0,00" 
    class="text value item-box-block"/>
    
    <label for="operacao" class="margin-left-10px item-box-block">Operação:</label>
    <select id="operacao" name="operacao" class="operacao margin-right-5px item-box-block">
      <option value="somar"> + </option>
      <option value="subtrair"> - </option>
    </select>
    <label for="valor_aleracao" class="margin-left-10px item-box-block">Valor da Alteração:</label>
    <input type="text" name="valor_aleracao" id="valor_aleracao" placeholder="0,00" 
    class="text value item-box-block"/>
</div>
<div class="button-inline-block">
    <button class="default-button button-inline-block" onclick="extrairEstoqueCorrigido()">Extrair no Formato SPEDFISCAL</button>
    <button class="default-button-green button-inline-block" onclick="extrairInventarioCsv_Corrigir()">Extrair no Formator CSV  <i class="fa fa-file"></i></button>
</div>

    `;return o.innerHTML=t,o},i=document.getElementById("main"),p=()=>{window.addEventListener("hashchange",()=>{switch(i.innerHTML="",window.location.hash){case" ":i.appendChild(n());break;case"#ConfiguracoesEmail":i.appendChild(s());break;case"#ExtrairEstoque":i.appendChild(u());break;case"#CorrigirEstoque":i.appendChild(d());break;default:i.appendChild(n())}})};window.addEventListener("load",()=>{i.appendChild(n()),p()});
