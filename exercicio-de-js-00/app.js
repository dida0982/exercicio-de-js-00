//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

// Pergunta ao usuário qual é o dia da semana e armazena a resposta na variável diaSemana
let diaSemana = prompt("Qual é o dia da semana?");

// Verifica se a resposta do usuário é "Sábado" ou "Domingo"
if (diaSemana === "Sábado" || diaSemana === "Domingo") {
    // Se a resposta for "Sábado" ou "Domingo", exibe a mensagem "Bom fim de semana!"
    alert("Bom fim de semana!");
} else {
    // Caso contrário, exibe a mensagem "Boa semana!"
    alert("Boa semana!");
}

