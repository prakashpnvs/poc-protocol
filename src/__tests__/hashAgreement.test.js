import { hashAgreement } from "../utils/hashAgreement";

test("hashAgreement returns a valid hash", () => {
  const message = "Test agreement";
  const signature = "0xFakeSignature";
  const hash = hashAgreement(message, signature);
  expect(hash).toMatch(/^0x[a-fA-F0-9]{64}$/);
});
