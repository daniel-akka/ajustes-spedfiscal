export default () => {
    const container = document.createElement('div');

    const template = `
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

    `;

    container.innerHTML = template;

    return container;
}