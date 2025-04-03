
var conteudo_arquivo = "";
var conteudo_inventario = "";
var filename_corrigido = "";
var array_inventario_csv = [];

function lerArquivoSpedInventario(files){
    var reader = new FileReader();
     reader.onload = function(progressEvent){
        conteudo_arquivo = this.result;
     };
     reader.readAsText(files[0], "iso-8859-1");
     filename_corrigido = files[0].name;
}

function visualizarIventario(){
    conteudo_inventario = getInventario();
    document.getElementById("total_estoque").value = getTotalInventario();
}

function getInventario(){

    var blocos_removidos = [
        "|0150|", "|C100|", "|C190|", "|C191|", "|9900|0150|", 
        "|9900|C100|", "|9900|C190|", "|9900|C191|"
    ];
    
    var blocos_para_contagem = new Map();
    blocos_para_contagem.set("|0", "|0990|");
    blocos_para_contagem.set("|990", "|9900|9900|");
    
    var blocos_ajustados = new Map();
    blocos_ajustados.set("|C001|", "|C001|1|");
    blocos_ajustados.set("|C990|", "|C990|2|");

    var cont_linhas = 0;
    var cont_bloco = 0;
    var novo_conteudo_do_arquivo = "";
    var array_linhas = [];
    array_linhas = conteudo_arquivo.split('\n');
    var remover_linha = false;
    var cont9990 = 0;
    array_linhas.forEach(linha => {

        remover_linha = false;
        //blocos que serao removidos
        blocos_removidos.forEach(bloco => {
            if (linha.startsWith(bloco)){
                remover_linha = true;
            }
        });
        
        if (remover_linha){ return; }


        if (linha.startsWith("|99")){cont9990 += 1}
        //Blocos para Recontagem
        blocos_para_contagem.forEach(function(final_bloco, bloco) {
            
            if (linha.startsWith(bloco)){
                cont_bloco += 1;

                if (linha.startsWith(final_bloco)){

                    linha = finalBloco(linha, cont_bloco);
                    cont_bloco = 0;
                }
            }
        })
        if(linha.startsWith("|9990|")) {
            linha = "|9990|" + (cont9990 + 2) + "|\n";
        }
        

        //Correção de Blocos
        blocos_ajustados.forEach(function(value, bloco){

            if (linha.startsWith(bloco)){
                linha = value + "\n";
            }
        })

        //Final do arquivo
        if (linha.startsWith("|9999|")){
            
            cont_linhas += 1;
            novo_conteudo_do_arquivo += "|9999|" + cont_linhas + "|";
            novo_conteudo_do_arquivo += "\n"
        } else {
            cont_linhas += 1;
            novo_conteudo_do_arquivo += linha;   
        }        
        
    });

    

    return novo_conteudo_do_arquivo;
}

function getTotalInventario(){
    
    var array_linhas = [];
    array_linhas = conteudo_arquivo.split('\n');
    var total_estoque = 0.0;
    if (array_linhas.length > 0){

        array_linhas.forEach(linha => {
        
            if (linha.startsWith("|H010|")){
                var colunas = linha.split("|");
                var valor = parseFloat(colunas[6].replace(",", "."));
                total_estoque += valor;
            }
        });
    }

    return Intl.NumberFormat().format(total_estoque);
}

function gerarConteudoCsv_corrigido(){
    
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


function extrairInventarioCsv_Corrigir(){
    gerarConteudoCsv();
    var novo_nome = filename.toUpperCase();
    novo_nome = novo_nome.replaceAll(".TXT", "");
    downloadInventarioCSV('CSV INVENTARIO - ' + novo_nome + ".csv", array_inventario_csv);
}


function downloadInventarioCSV_Corrigir(filename, rows_file) {

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

function extrairEstoqueCorrigido(){
    downloadInventarioSpedFiscal_Corrigido('INVENTARIO - ' + filename, conteudo_inventario);
}

function downloadInventarioSpedFiscal_Corrigido(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;iso-8859-1,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }