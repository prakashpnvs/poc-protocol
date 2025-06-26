import { keccak256, toUtf8Bytes } from "ethers";

export function hashAgreement(message, signature) {
  const input = JSON.stringify({ message, signature });
  return keccak256(toUtf8Bytes(input));
}
