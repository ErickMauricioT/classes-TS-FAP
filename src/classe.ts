class Deposito {
  depo: number;
  saldo: number;

  constructor(depo: number, saldo: number) {
    this.depo = depo;
    this.saldo = saldo;
  }
}

class Cliente extends Deposito {
  nome: string;

  constructor(depo: number, saldo: number, nome: string) {
    super(depo, saldo); // Chama o construtor da classe base Deposito
    this.nome = nome;
  }

  usuario(): void {
    if (depo >= 500) {
      console.log(
        `O Cliente ${this.nome} Depositou R$${
          this.depo
        }, e ganhou 2% de CashBack, seu saldo é: R$${saldo + depo * 0.02}`,
      );
    }
    if (depo < 500) {
      console.log(
        `O Cliente ${this.nome} Depositou R$${this.depo}, seu Saldo é ${saldo}`,
      );
    }
  }
}

class Banco extends Cliente {
  fim: number[];

  constructor(
    depo: number,
    saldo: number,
    nome: string,
    total: number,
    fim: number[] = [],
  ) {
    super(depo, saldo, nome); // Chama o construtor da classe base Cliente
    this.fim = fim;
  }
}

// Testando as classes
import PromptSync from 'prompt-sync';
const prompt = PromptSync();
console.log('');
console.log('OLÁ SEJA BEM VINDO');
console.log('');

const depo: number = Number(prompt('Digite o valor do deposito: '));
console.log('');

let saldo: number = depo;
const nome: string = prompt('informe seu nome: ');
console.log('');

console.log(`Olá ${nome}`);

const total: number = 0;

const banco = new Banco(depo, saldo, nome, total);
console.log('');

banco.usuario();
console.log('');

console.log('OBRIGADO VOLTE SEMPRE');
console.log('');
