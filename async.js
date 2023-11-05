import CryptoJS from "crypto-js";

export function encryptMessage(message, key, callback) {
  const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
  callback(encryptedMessage);
}

export function encryptMessagePromise(message, key) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
      if (encryptedMessage) {
        resolved(encryptedMessage);
      } else {
        reject(new Error("Failed to encrypt message"));
      }
    }, 2000);
  });
}

// const message = {
//   name: "Mizan",
//   password: "11223344",
// };

// const secretKey = "ash893qajnsdp9asiU*A";

// encryptMessage(JSON.stringify(message), secretKey, (encryptedMessage) => {
//   console.log(encryptedMessage);
// });

// encryptMessagePromise(JSON.stringify(message), secretKey).then(
//   (encryptedMessage) => console.log(encryptedMessage)
// );
