let dinheiro = 20
let precoLanche = 10
let calculo = dinheiro - precoLanche

if (calculo > 0) {
    console.log(`O troco é ${calculo},00R$`);
} else if (calculo < 0){
    console.log(`Você não tem dinheiro suficiente`);
} else{
    console.log(`Não tem troco`);
}