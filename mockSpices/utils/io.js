import { promises as fs } from "fs";
import path from "path";
import { vi } from "vitest";

vi.mock("fs")

export function saveTokenToFile(data, fileName) {
  const storagePath = path.join(process.cwd(), "data", fileName);
  return fs.writeFile(storagePath, data);
}
