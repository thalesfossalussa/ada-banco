export class ContaBancaria {
    numeroConta: string;
    saldo: number;
    titular: string;

    constructor(numeroConta: string, saldoInicial: number, titular: string) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
        this.titular = titular;
    }

    consultarSaldo() {

    }

    depositar() {

    }

    sacar() {
        
    }
}