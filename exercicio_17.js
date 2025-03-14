let dinheiro = 100
let precoSkin = 50
let resposta = "não"


if (dinheiro >= precoSkin && resposta === "sim") {
  console.log("Skin comprada com sucesso!");
  dinheiro -= precoSkin; 
  console.log(`Dinheiro restante: ${dinheiro}`);
} else {
  console.log("Compra da skin não realizada.");
}

// Gustavo Teixeira Lisboa
// 14/03/2025 18:50