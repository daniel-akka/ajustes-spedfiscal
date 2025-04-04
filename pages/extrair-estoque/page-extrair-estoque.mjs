export default () => {
    const container = document.createElement('div');

    const template = `
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

    `;

    container.innerHTML = template;

    return container;
}