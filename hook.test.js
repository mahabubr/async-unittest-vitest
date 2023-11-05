import { it, expect, beforeEach, describe, beforeAll } from "vitest";
import { User } from "./hooks";

const testEmail = "test@test.com";

let user;

beforeEach(() => {
  user = new User(testEmail);
});

// beforeAll();

describe("test()", () => {
  // beforeAll();

  it("Should have an email property", () => {
    expect(user).toHaveProperty("email");
  });

  it("Should update the email", () => {
    const newTestEmail = "test2@test.com";
    user.updateEmail(newTestEmail);
    expect(user.email).toBe(newTestEmail);
  });
});

it.concurrent("Should store the provide email value", () => {
  expect(user.email).toBe(testEmail);
});

it("Should Clear the email", () => {
  user.clearEmail();

  expect(user.email).toBe("");
});

it("Should still have an property after cleaning the email", () => {
  user.clearEmail();

  expect(user).toHaveProperty("email");
});
