/* eslint-disable */
const name: string = 'luiz';
const age: number = 30;
const ofAge: boolean = true;
const symb: symbol = Symbol('ntr');

//arrays
const repositoryAges: Array<number> = [1, 2, 3, 4, 5];
const repositoryAges2: number[] = [1, 2, 3, 4, 5];

//any and void
function anyType(msg: any): void {
  console.log(msg);
}

anyType('Fabio Freitas');
anyType(['fabio', 'freitas']);
anyType(12);

export {};
