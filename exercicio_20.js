let dinheiro = 25;
let precoLanche = 15;
let precoBebida = 10;
let precoTotal = precoBebida + precoLanche;

if (dinheiro >= precoTotal) {
    console.log("Dá para comprar lanche e bebida!");
} else if (dinheiro >= precoLanche) {
    console.log("Dá para comprar só o lanche.");
} else {
    console.log("Não dá para comprar nada.");
}

// Gustavo Teixeira Lisboa
// 14/03/2025 18:50