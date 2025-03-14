export default () => {
    const container = document.createElement('div');

    const template = `
<h2>Extrair Estoque</h2>

<div>
    <h3>Selecione um arquivo SPED FISCAL</h3>
    <h4 class="font-alerta">Certifique-se de ter <mark>validado o arquivo SpedFiscal antes!</mark></h4>
    <label for="fileSped">Selecione o arquivo:</label>
    <input type="file" id="fileSped" name="fileSped" accept=".txt" onChange="lerArquivoSpedFiscal(this.files)"><br><br>
    <button class="default-button" onclick="extrairIventarioSpedFiscal()">Extrair o Inventário</button>
</div>

    `;

    container.innerHTML = template;

    return container;
}