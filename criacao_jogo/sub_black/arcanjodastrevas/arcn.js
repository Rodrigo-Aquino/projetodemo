function responda(){
    teste1 = prompt("Qual é o maior tubarão?\n Digite o NÚMERO da sua escolha\n 1 - Frade\n 2 - Branco");
    teste2 = prompt("Qual era o significado do anjo Lucifer?\n Digite o NÚMERO da sua escolha\n 1 - Força de Deus\n 2 - Luz");
    teste3 = prompt("Quantos anjos se juntaram a Lucifer?\n Digite o NÚMERO da sua escolha\n 1 - 1/3 dos anjos\n 2 - 2/3 dos anjos");

    if (teste1 == 1 && teste2 == 2 && teste3 == 1){
        window.location.href = "../vitoria/vitoriablack.html";

    }else{
        window.location.href = "../derrota/derrotablack.html";
    }

    
}