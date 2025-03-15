var conteudo_original_do_arquivo = "";
var array_inventario_csv = [];
var filename = "";

function lerArquivoSpedFiscal(files){

    var reader = new FileReader();
     reader.onload = function(progressEvent){
        conteudo_original_do_arquivo = this.result;
     };
     reader.readAsText(files[0], "iso-8859-1");
     filename = files[0].name;
}

function gerarConteudoCsv(){
    
    novo_conteudo_do_arquivo = "";
    var array_linhas = conteudo_original_do_arquivo.split('\n');
    var colunas_produto = [];
    var array_produtos_map = new Map();
    array_linhas.forEach(linha => {
    
        //Se é o registro do cadastro dos produtos:
        if (linha.startsWith("|0200|")){
            colunas_produto = linha.split("|");
            array_produtos_map.set(colunas_produto[2], colunas_produto[3]);            
        }

        //console.log(array_produtos_map.values());

        //Se for o registro do inventário:
        if (linha.startsWith("|H010|")){

            linha_do_inventario_csv = "";
            var codigo = "";
            var nome = "";
            var unidade = "";
            var quantidade = "";
            var valorunitario = "";
            var array_da_linha_csv = [];

            var colunas_da_linha = linha.split("|");
            codigo = colunas_da_linha[2];
            nome = array_produtos_map.get(colunas_da_linha[2]);
            unidade = colunas_da_linha[3];
            quantidade = colunas_da_linha[4];

            valorunitario = colunas_da_linha[5];
           
            //add array dos valores do produto:
            array_da_linha_csv.push(codigo);
            array_da_linha_csv.push(nome.replaceAll(",", ""));
            array_da_linha_csv.push(quantidade);
            array_da_linha_csv.push(unidade);
            array_da_linha_csv.push(valorunitario);

            //add linha ao conteudo principal:
            array_inventario_csv.push(array_da_linha_csv);
        }      
        
    });
    
}

function extrairInventarioCsv(){
    gerarConteudoCsv();
    var novo_nome = filename.toUpperCase();
    novo_nome = novo_nome.replaceAll(".TXT", "");
    downloadInventarioCSV('CSV INVENTARIO - ' + novo_nome + ".csv", array_inventario_csv);
}


function downloadInventarioCSV(filename, rows_file) {

    let csvContent = "data:text/csv;charset=iso-8859-1," 
    + rows_file.map(e => e.join(";")).join("\n");
    var encodedUri = encodeURI(csvContent);

    var element = document.createElement('a');
    element.setAttribute('href', encodedUri);
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}