const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

export const args = yargs(hideBin(process.argv))
  .option("base", {
    alias: "b",
    type: "number",
    description: "This is the base",
  })
  .option("limit", {
    alias: "l",
    type: "number",
    description: "This is the limit",
  })
  .option("showTable", {
    alias: "s",
    type: "boolean",
    description: "This is the show table",
  })
  .option("name", {
    alias: "n",
    type: "string",
    default: "default-name",
    description: "This is the File name",
  })
  .option("destination", {
    alias: "d",
    type: "string",
    default: "customOutput",
    description: "This is the File destnation",
  })
  .check((argv: any, options: any) => {
    console.log(argv);
    if (argv.b < 1) throw new Error("Value must be greater than zero");
    return true;
  })
  .parse();
