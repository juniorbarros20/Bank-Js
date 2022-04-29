class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;
}


const cliente1 = new Cliente();
cliente1.nome = "Alexandre"
cliente1.cpf = 12345678908;

const cliente2 = new Cliente();
cliente2.nome = "Joaquim"
cliente2.cpf = 98765432101;

const ContaCorrenteAlexandre = new ContaCorrente();
ContaCorrenteAlexandre.saldo = 0;
ContaCorrenteAlexandre.agencia = 1001;

console.log(ContaCorrenteAlexandre.saldo);
ContaCorrenteAlexandre.saldo = 100;
console.log(ContaCorrenteAlexandre.saldo);
let valorSacado = 200;
ContaCorrenteAlexandre.saldo -= valorSacado;

console.log(ContaCorrenteAlexandre.saldo);

console.log(cliente1);
console.log(cliente2);