import { ServerApp } from "./presentation/server-app";

const { args } = require("./config/plugins/args.plugin");

const { base, limit, showTable, name, destination } = args;

(async () => await main())();

async function main() {
  ServerApp.run({ base, limit, showTable, name, destination });
}
