class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0; 

    sacar(valor){
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return
        }
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Alexandre"
cliente1.cpf = 12345678908;

const cliente2 = new Cliente();
cliente2.nome = "Joaquim"
cliente2.cpf = 98765432101;

const contaCorrenteAlexandre = new ContaCorrente();
contaCorrenteAlexandre.agencia = 1001;

contaCorrenteAlexandre.depositar(100);
contaCorrenteAlexandre.depositar(100);
contaCorrenteAlexandre.depositar(100);

const valorSacado = contaCorrenteAlexandre.sacar(50);
console.log(valorSacado)

console.log(contaCorrenteAlexandre);
