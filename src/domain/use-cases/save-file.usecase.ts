import fs from "fs";

interface saveFileOptions {
  fileContent: string;
  destination?: string;
  name?: string;
  limit: number;
}

interface ISaveFileOptions {
  execute: (options: saveFileOptions) => boolean;
}

export class SaveFile implements ISaveFileOptions {
  constructor() {} // DI here

  execute({
    fileContent,
    name = "defaultName",
    destination = "defaultFolder",
    limit,
  }: saveFileOptions): boolean {
    try {
      fs.mkdirSync(destination, { recursive: true });
      fs.writeFileSync(`${destination}/${name}-${limit}.txt`, fileContent);
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  }
}
