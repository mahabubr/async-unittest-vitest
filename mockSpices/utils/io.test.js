import { expect, it, vi } from "vitest";
import { promises as fs } from "fs";
import { saveTokenToFile } from "./io";

vi.mock("fs");
vi.mock("path");

it("Should store the token to the file", () => {
  const data = "dummy token";
  const fileName = "token.txt";

  saveTokenToFile(data, fileName);
  //   expect(saveTokenToFile(data, fileName)).resolves.toBeUndefined();
  // expect(fs.writeFile).toHaveBeenCalled();
  expect(fs.writeFile).toBeCalledWith(fileName, data);
});
