function responda(){
    teste1 = prompt("Messi é jogador de qual time ?\n Digite o NÚMERO da sua escolha\n 1 - Barça\n 2 - PSG");
    teste2 = prompt("Qual desses felinos tem a mordida mais forte?\n Digite o NÚMERO da sua escolha\n 1 - Onça\n 2 - Leão");
    teste3 = prompt("O vermelho é uma cor...\n Digite o NÚMERO da sua escolha\n 1 - Quente\n 2 - Fria");

    if (teste1 == 2 && teste2 == 1 && teste3 == 1){
        window.location.href = "../alado/vitoria.html";

    }else{
        window.location.href = "../alado/derrota.html";
    }

    
}