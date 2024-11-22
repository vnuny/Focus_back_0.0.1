import crypto from "crypto";

export function generateRandomToken(length = 32) {
  return crypto.randomBytes(length).toString("hex");
}
