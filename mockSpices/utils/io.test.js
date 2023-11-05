import { expect, it } from "vitest";
import { promises as fs } from "fs";
import { saveTokenToFile } from "./io";

it("Should store the token to the file", () => {
  const data = "dummy token";
  const fileName = "token.txt";

  saveTokenToFile(data, fileName);
  //   expect(saveTokenToFile(data, fileName)).resolves.toBeUndefined();
  expect(fs.writeFile).toHaveBeenCalled();
});
