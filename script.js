var jogador_1 = "X";
var jogador_2 = "O"; //Letra O
var vez_jogador = jogador_1;
var gameover = false;

mostra_a_vez();

inicializador_jogo();

function mostra_a_vez() {
    if (gameover) { //Para não executar nada
        return 0;
    }
    if (vez_jogador == jogador_1) {

        document.getElementById('img_seletor').setAttribute("src", "img/x.png"); 
    } else {
        document.getElementById('img_seletor').setAttribute("src", "img/circulo.png"); 
    }
}

function inicializador_jogo() {
    var campos = document.getElementsByClassName("grid-item"); //Retorna todos os elementos que possuem a classe 'grid-item'
    for (var i = 0; i < campos.length; i++) { //Percorer todos os espaços do jogo da velha!
        campos[i].addEventListener("click", function () {
            //Observador de evento (AddEventListener)
            //toda vez que eu clickar no campo do jogo da velha Ele vai disparar um evento (Function)
            if (gameover) {
                //Se for gameover não pode aceitar mais nenhum click no tabuleiro!!
                return;
            } 
            //this é o espaço que foi clicado, ou seja, campos[i].
            else if (this.getElementsByTagName("img").length == 0) {
                //Pegar o elemento que possui a classname 'grid-item' que possui alguma tag img.
                // Se não tiver nenhuma imagem dentro do campo[0], faça algo.
                if (vez_jogador == jogador_1) {
                    this.innerHTML = " <img src='img/x.png'  width='84px' height='84px'> ";
                    this.setAttribute("jogada",jogador_1);
                    vez_jogador = jogador_2;
                }
                else{
                    this.innerHTML = " <img src='img/circulo.png'  width='84px' height='84px'> ";
                    this.setAttribute("jogada",jogador_2);
                    vez_jogador = jogador_1;
                }
                mostra_a_vez();
                verificarVencedor();
            }
        });

    }
}

async function verificarVencedor(){
    //Verificar as combinacoes!!! (horizontal, vertical)
    var c1_l1 = document.getElementById("c1_l1").getAttribute("jogada");
    var c2_l1 = document.getElementById("c2_l1").getAttribute("jogada");
    var c3_l1 = document.getElementById("c3_l1").getAttribute("jogada");

    var c1_l2 = document.getElementById("c1_l2").getAttribute("jogada");
    var c2_l2 = document.getElementById("c2_l2").getAttribute("jogada");
    var c3_l2 = document.getElementById("c3_l2").getAttribute("jogada");

    var c1_l3 = document.getElementById("c1_l3").getAttribute("jogada");
    var c2_l3 = document.getElementById("c2_l3").getAttribute("jogada");
    var c3_l3 = document.getElementById("c3_l3").getAttribute("jogada");

    var vencedor = "";


if(c1_l1 == c1_l2 && c1_l1 == c1_l3 && c1_l1 != ""){
    vencedor = c1_l1;
    
}
else if (c1_l1== c2_l1 && c1_l1 == c3_l1 && c1_l1 != "" ){
        vencedor = c1_l1;
}
else if (c1_l1 == c2_l2 && c1_l1 == c3_l3 && c1_l1 != ""){
    vencedor = c1_l1;
}
else if(c1_l2 == c2_l2 && c1_l2 == c3_l2 && c1_l2 != ""){
    vencedor = c1_l2;
    }
else if(c3_l1 == c3_l2 && c3_l1 == c3_l3 && c3_l1 != ""){
        vencedor = c3_l1;
    }
else if(c3_l1 == c2_l2 && c3_l1 == c1_l3 && c3_l1 != ""){
            vencedor = c3_l1;
}
else if(c1_l3 == c2_l3 && c1_l3 == c3_l3 && c1_l3!= ""){
    vencedor = c1_l3;
}
else if(c2_l1 == c2_l2 && c2_l1 == c2_l3 && c2_l1 != ""){
        vencedor = c2_l1;
    }
else if (c1_l1 == c2_l2 && c1_l1 == c3_l3 && c2_l1 != ""){
        vencedor = c1_l1;
}
else if(c1_l1 != "" && c2_l2 != "" && c3_l3 != "" &&  c1_l2 != "" && c2_l2 != "" && c3_l2 != "" && c1_l3 != "" && c2_l3 != "" && c3_l3 != "")
    {
        gameover = true;
        await sleep(50);
        alert("Deu velha!");
    }

if(vencedor != ""){
        gameover = true;
        await sleep(50);    
        alert ("O ganhador foi o: '"+vencedor+"'");
    }
 
}

function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}













