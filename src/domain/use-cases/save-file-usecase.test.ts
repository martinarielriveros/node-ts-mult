import { SaveFile } from "./save-file.usecase";
import fs from "fs";

describe("Test suite for savefile", () => {
  // try {
  //   afterEach(() => {
  //     fs.rmSync("defaultFolder", { recursive: true });
  //   });
  // } catch (err) {
  //   console.error(err);
  // }

  test("should create a file", () => {
    const saveFile = new SaveFile();

    const result = saveFile.execute({
      fileContent: "This is a test",
      limit: 10,
    });

    const content = fs.readFileSync(
      "defaultFolder/defaultName-10.txt",
      "utf-8"
    );

    expect(result).toBe(true);
    expect(fs.existsSync("defaultFolder/defaultName-10.txt")).toBe(true);
    expect(content).toContain("This is a test");
  });

  test("should return false if file could not be created", () => {
    const saveFile = new SaveFile();

    const mockSaveFile = jest
      .spyOn(saveFile, "execute")
      .mockImplementation(() => {
        throw new Error("custom error from mocked save file");
      });

    expect(() =>
      saveFile.execute({ fileContent: "some bulshit", limit: 23 })
    ).toThrow("custom error from mocked save file");
  });
});
