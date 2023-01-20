
// colocando palavras no jogo



var palavrasjogo = new Array ();
palavrasjogo[0] = "paralelepípedo";
palavrasjogo[1] = "paralelogramo";
palavrasjogo[2] = "proparoxitona";
palavrasjogo[3] = "ornitorrinco";
palavrasjogo[4] = "otorrinolaringologista";



function embaralhar(array) {
  for (var i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

var imprimirpalavras = (embaralhar(palavrasjogo).join(" | ") +"\n");
$('#palavrasjogo').text(imprimirpalavras);






//calcula o tamanho da frase e imprime no console
var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;

//manipulaçãp com o tempo do jogo
var tempoJogo = $("#tempo");
var tempoInicial = tempoJogo.text();

//pega o tamanho da frase e apresenta em  tela

var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

//ativa o inicio do jogo



var campo = $("#campo-digitacao");
campo.on("input", function(){

    


 //pega  o conteudo do campo de texto
var frase = campo.val();

// conta quantos caracteres exixtem na frase digitada
var nCaracteresDigitados = frase.length;

// exibe a quantidade na tela
$("#caracteres-digitados").text(nCaracteresDigitados);

// quebra a frase em palavras e conta as palavras
var nPalavrasDigitadas = frase.split(" ").length;

//exibe a quantidade de palavras ana tela
$("#palavras-digitadas").text(nPalavrasDigitadas);
});

// desabilitação do campo



campo.on("focus", function (){
    move()
   
    var cronometro = setInterval(function(){
             
            var tempoRestante = tempoJogo.text();
            
            if(tempoRestante <= 0){

                campo.attr("disabled", true);
                clearInterval(cronometro);

                nome= $("#nome").val()
                palavrasDigitadas=$("#palavras-digitadas").text()
                pontuacao = palavrasDigitadas/tempoInicial*60;
                 player = imagemjogador;
                
                $('#tabela-resultado').append('<tr><td>'+nome+'</td><td>'+pontuacao+'</td><td>'+player+'</td></tr>');

            }else{
                tempoRestante--;
                tempoJogo.text(tempoRestante);
            }
        }, 1000);
    });
// funcionalidade do botao
    $("#botao-reiniciar").on("click", function(){
      
        campo.attr("disabled", false);
        campo.val("");
        $("#caracteres-digitados").text("0");
        $("#palavras-digitadas").text("0");
        $("#tempo").text(tempoInicial);

        imprimirpalavras = (embaralhar(palavrasjogo).join(" | ") +"\n");

        $('#palavrasjogo').text(imprimirpalavras);
        

      
        
        
        });
        //pegar elemento do jogador
       var imagemjogador = '';


       $('#i1').on("click",function(){
        imagemjogador = '<img src="img/icon1.png">'
       })
       $('#i2').on("click",function(){
        imagemjogador = '<img src="img/icon2.png">'
       })
       $('#i3').on("click",function(){
        imagemjogador = '<img src="img/icon3.png">'
       })

      
        

   
     

      //progreço da barra de tempo

     

      function move() {
        var elem = document.getElementById("myBar");   
        var width = 1;
        var id = setInterval(frame, 150);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
          }
        }
      }
  



