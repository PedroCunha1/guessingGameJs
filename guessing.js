const randomNumber = Math.round(Math.random() * 100);
if (randomNumber==0){
    randomNumber = 1;
}
let tentativas = 10;
let tentativasUsadas = 0;

function trigger(){
    if(event.key === 'Enter'){
        chances(jogo());
    }
}
function jogo(){
    let input = document.getElementById("enter").value;
    return input;
  }

function chances(input){
    if(input == randomNumber){
        tentativasUsadas++;
        document.getElementById("resultado").innerHTML = "TENTATIVAS USADAS " + tentativasUsadas; 
        document.getElementById("tentativas").innerHTML = "VOCÊ ACERTOU";
        tentativasUsadas=tentativasUsadas;
        setTimeout(function() {
            window.location='guess.html';
        }, 1300);
    }else if(input<randomNumber){
        console.log("errou");
        tentativas--;
        tentativasUsadas++;
        document.getElementById("resultado").innerHTML = "O NÚMERO DIGITADO É MENOR QUE O SORTEADO";
        document.getElementById("tentativas").innerHTML = tentativas + " TENTATIVAS";
        setTimeout(function() {
            document.getElementById("enter").value = "";;
        }, 370);
        
        finalizar(tentativas);
    }else{
        console.log("errou");
        tentativas--;
        tentativasUsadas++;
        document.getElementById("resultado").innerHTML = "O NÚMERO DIGITADO É MAIOR QUE O SORTEADO";
        document.getElementById("tentativas").innerHTML = tentativas + " TENTATIVAS";
        setTimeout(function() {
            document.getElementById("enter").value = "";;
        }, 370);
    }

}
function finalizar(tentativas){
    if(tentativas <= 0){
        document.getElementById("resultado").innerHTML = "SUAS TENTATIVAS ACABARAM";
        document.getElementById("tentativas").innerHTML = "FIM DO JOGO";
        setTimeout(function() {
            window.location='guess.html';
        }, 1300);
        
    }
}
