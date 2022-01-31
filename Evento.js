// Cadastro Evento
// Atividade UC-08
// Passo a Passo cadastro de evento

let Palestrantes = 10
    if(Palestrantes <= 10) {
        console.log("Número de Palestrantes ok, prosseguir com o cadastro!")
}   else {
        console.log("Limite de palestrantes excedido, cadastro não realizado.")
}

let Participantes = 101
    if(Participantes <= 100) {
        console.log ("Número de Participantes ok, prosseguir com o cadastro!")
}   else {
        console.log("Número de participantes excedido, evento não cadastrado.")
}

let idade = '18'
    console.log("Sua idade é:", idade.length)

if(idade.length >= 18) {
    console.log("Cadastro autorizado, prossiga com o cadastro do evento")
} else {
    console.log("Cadastro não permitido")
}

let idadepalestrante = '18'
    console.log("Idade dos palestrantes:", idadepalestrante.length)

if(idade.length >= 18) {
    console.log("Cadastro autorizado ao palestrante, registre o evento")
} else {
    console.log("Cadastro não permitido")
}

let data = '20'
    console.log("A data limite para o evento é até o dia:", data.length)

if(data.length > 20) {
    console.log("Evento autorizado, continuar com cadastro")
} else {
    console.log("Data inválida, cadastro negado")
}

let listarparticipantes = ['']
    console.log(listarparticipantes.length)

let listarpalestrantes = ['']
    console.log(listarpalestrantes.length)