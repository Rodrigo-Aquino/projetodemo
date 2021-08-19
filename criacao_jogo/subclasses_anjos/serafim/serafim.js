function responda(){
    teste1 = prompt("Qual é a ave mais veloz?\n Digite o NÚMERO da sua escolha\n 1 - Águia\n 2 - Falcão");
    teste2 = prompt("Qual fruta tem mais vitamina C?\n Digite o NÚMERO da sua escolha\n 1 - Morango\n 2 - Goiaba");
    teste3 = prompt("Qual Arcanjo é conhecido como o general dos anjos?\n Digite o NÚMERO da sua escolha\n 1 - Gabriel\n 2 - Miguel");

    if (teste1 == 2 && teste2 == 2 && teste3 == 2){
        window.location.href = "../vitoria/vitoria.html";

    }else{
        window.location.href = "../derrota/derrota.html"
    }

    
}