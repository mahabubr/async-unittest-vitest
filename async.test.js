import { it, expect, beforeAll, afterAll, beforeEach, afterEach } from "vitest";
import { encryptMessage, encryptMessagePromise } from "./async";
import CryptoJs from "crypto-js";

beforeAll(() => {
  console.log("Before all");
});

afterAll(() => {
  console.log("After all");
});

beforeEach(() => {
  console.log("Before each");
});

afterEach(() => {
  console.log("After each");
});

it("Should encrypt a message", async () => {
  const message = "Programming hero";
  const secretKey = "515aadsa8q347&)*";

  const encryptedData = await new Promise((resolved, reject) => {
    encryptMessage(message, secretKey, (message) => {
      resolved(message);
    });
  });

  expect(encryptedData).toBeDefined();
});

it("Should also just pass", async () => {
  const message = "Programming hero";
  const secretKey = "515aadsa8q347&)*";

  const encryptedData = await encryptMessagePromise(message, secretKey);

  expect(encryptedData).toBeDefined();
});

it("Should encrypt the message correctly", async () => {
  const message = "Programming hero";
  const secretKey = "515aadsa8q347&)*";
  const encryptedData = await encryptMessagePromise(message, secretKey);
  expect(encryptedData).toBeDefined();

  const decryptedMessage = CryptoJs.AES.decrypt(
    encryptedData,
    secretKey
  ).toString(CryptoJs.enc.Utf8);

  expect(decryptedMessage).toBe(message);
});
