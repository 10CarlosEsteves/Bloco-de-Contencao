//Usando alguns tipos do JavaScript
var idade = 18;
var nome = "Carlos";
var sobrenome = "Henrique";
var verdade = true;

console.log("=======================================================");
console.log("Olá, eu me chamo " + nome + " " + sobrenome+".");
console.log("Eu tenho " + idade +" anos.");
console.log("Esse cara \u261D está dizendo a verdade?"+ verdade+"!");

console.log("=======================================================");
console.log("O texto acima foi feito usando caracteres UTF-16 de");
console.log("emoji e coversões implícitas. O texto abaixo é o mesmo");
console.log("Só que usando conversões explicitas\n\n");

idade = String(idade);
verdade = String(verdade);

console.log("Olá, eu me chamo " + nome + " " + sobrenome+".");
console.log("Eu tenho " + idade +" anos.");
console.log("Esse cara \u261D está dizendo a verdade? "+ verdade+"!");

console.log("\nSó para mostrar que eu não estou mentindo, aqui as conversões:");
console.log("Idade: "+typeof(idade));
console.log("verdade: "+typeof(verdade))

console.log("=======================================================");
console.log("Vamos brincar com os dias da semana, o código abaixo usa");
console.log("classes e objetos do tipo Date que manipula os dias e horas");

let hoje = new Date();

console.log("Informações de hoje: " + hoje);
console.log("Estamos no mes:"+(hoje.getMonth()+1));
console.log("Data formatada: " + hoje.getDate() +"/"+ hoje.getMonth() +"/"+ hoje.getFullYear());
console.log("Horário formatado: "+hoje.getHours() +":"+ hoje.getMinutes() +":"+ hoje.getSeconds() );

console.log("=======================================================");
console.log("Por fim, vamos brincar com o tipo String");
nome = "Carlos";
console.log("Exemplo de String: " + nome);
console.log("Tamanho da String: "+nome.length);
console.log("Imprimindo cada letra do meu nome:");

for(let x=0; x<nome.length ;x++){
    console.log(nome.charAt(x));
}

console.log("=======================================================");
console.log("Qual será o comportamento quando tentamos dividir por números\n cada vez mais próximos do 0 mas nunca 0. Como o limite:");
console.log("LIM x->0 1/X")
let x = 1;

while(x!=0){
    console.log("X = " + x +" | 1/X = " + 1/x);
    x= x/10;
}
