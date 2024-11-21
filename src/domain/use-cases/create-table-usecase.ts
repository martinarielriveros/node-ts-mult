// crear los datos del archiv
interface IOptionsCreateTable {
  base: number;
  limit?: number;
}

interface ICreateTable {
  execute: ({ base, limit }: IOptionsCreateTable) => string;
}

export class CreateTable implements ICreateTable {
  constructor() {
    //Dependencies injection
  }

  execute({ base, limit = 10 }: IOptionsCreateTable) {
    let outputMessage = "";

    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }
    return outputMessage;
  }
}
