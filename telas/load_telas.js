function ocultarTelas(){
    var telas = document.getElementsByClassName("telas");
      var i;
      for (i = 0; i < telas.length; i++) {
        var tela = telas[i];
        if (tela.classList.contains('show')) {
          tela.classList.remove('show');
        }
      }
}


function loadExtrairEstoque(){
    ocultarTelas();
    $(function(){
      $("#tela-extrair-estoque").load("extrair_estoque.html"); 
    });
    //document.getElementById("tela-extrair-estoque").classList.add("show");
}

function loadCorrigirCfop(){
    ocultarTelas();
    document.getElementById("telaCorrigirCfop").classList.add("show");
}