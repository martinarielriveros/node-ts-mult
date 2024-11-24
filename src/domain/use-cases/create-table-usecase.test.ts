import { CreateTable } from "./create-table-usecase";

describe("Test suite", () => {
  test("should crete table with default values", () => {
    const table = new CreateTable().execute({ base: 5, limit: 24 });
    console.log;
    const linesCount = table.split("\n");

    // expect(table).toBeInstanceOf(CreateTable);
    expect(linesCount.length).toBe(24);
    expect(table).toContain("5 x 1 = 5");
    expect(table).toContain("5 x 24 = 120");
    expect(table).not.toContain("5 x 25 = 120");
  });
});
