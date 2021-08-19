function responda(){
    teste1 = prompt("Qual é a matéria prima do vinho?\n Digite o NÚMERO da sua escolha\n 1 - Azeitona\n 2 - Uva");
    teste2 = prompt("Qual cantor, também é dançarino?\n Digite o NÚMERO da sua escolha\n 1 - Usher\n 2 - Eminem");
    teste3 = prompt("Qual dessas é o norte das virtudes?\n Digite o NÚMERO da sua escolha\n 1 - Honra\n 2 - Lealdade");

    if (teste1 == 2 && teste2 == 1 && teste3 == 1){
        window.location.href = "../vitoria/vitoriablack.html";

    }else{
        window.location.href = "../derrota/derrotablack.html";
    }

    
}