import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Alexandre", 12345678908);
const cliente2 = new Cliente("Joaquim", 98765432101);

const contaCorrenteAlexandre = new ContaCorrente(1001, cliente1);
contaCorrenteAlexandre.depositar(500);
const conta2 = new ContaCorrente(1002, cliente2);

let valor = 200;
contaCorrenteAlexandre.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);
