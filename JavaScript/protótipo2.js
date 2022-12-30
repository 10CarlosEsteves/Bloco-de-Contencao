//Le um texto e exibe letra por letra.
function Leitora(texto){
    for(var x=0; x<texto.length; x++){
        console.log(`Letra ${x + 1} = ${texto.charAt(x)}`);
    }
}

//Le um texto e exibe letra por letra de forma inversa.
function LeitoraInversa(texto){
    for(var x = texto.length; x > 0 ; x--){
        console.log(`Letra ${x} = ${texto.charAt(x-1)}`);
    }
}

//Le um número e diz se ele é impar ou par
function ImparPar(numero){
    numero % 2 == 0 ? console.log("O número inserido é par") : console.log("O número inserido é impar");
}

