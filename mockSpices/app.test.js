import { describe, expect, it, vi } from "vitest";
import { generateToken } from "./app";

describe("generateToken()", () => {
  it("should execute the logger function if passed", () => {
    const loggerFn = vi.fn();
    loggerFn.mockImplementation(() => {
      
    })

    generateToken(loggerFn);

    expect(loggerFn).toHaveBeenCalled();
  });
});
