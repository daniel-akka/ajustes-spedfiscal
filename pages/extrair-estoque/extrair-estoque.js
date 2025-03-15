var conteudo_original_do_arquivo = "";
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

function lerArquivoSpedFiscal(files){

    var reader = new FileReader();
     reader.onload = function(progressEvent){
        conteudo_original_do_arquivo = this.result;
     };
     reader.readAsText(files[0], "iso-8859-1");
}

function extrairIventarioSpedFiscal(){
    
    var cont_linhas = 0;
    var cont_bloco = 0;
    var novo_conteudo_do_arquivo = "";
    var array_linhas = conteudo_original_do_arquivo.split('\n');
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
    
    downloadInventarioSpedFiscal('INVENTARIO EXTRAIDO DO SPEDFISCAL.txt', novo_conteudo_do_arquivo);
}

function finalBloco(linha, quantidade){
    var colunas = linha.split("|");
    var str_linha = ""
    for (var i = 0; i < colunas.length; i++){

                        //ser for a ultima coluna
        if (i == colunas.length - 2){
            str_linha += quantidade + "|\n"
            break;
        }else{
            str_linha += colunas[i] + "|";
        }
    }

    return str_linha;
}

function downloadInventarioSpedFiscal(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;iso-8859-1,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }