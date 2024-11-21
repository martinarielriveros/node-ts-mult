import { CreateTable } from "../domain/use-cases/create-table-usecase";
import { SaveFile } from "../domain/use-cases/save-file.usecase";

interface runOptions {
  base: number;
  limit: number;
  name: string;
  destination: string;
  showTable: boolean;
}

export class ServerApp {
  static run(option: runOptions) {
    const { base, limit, name, destination, showTable } = option;
    const table = new CreateTable().execute({ base, limit });

    showTable ? console.log(table) : null;

    const result = new SaveFile().execute({
      fileContent: table,
      destination,
      name,
      limit,
    });

    result
      ? console.log("File saved successfully")
      : console.log("Error saving file ,");
  }
}
