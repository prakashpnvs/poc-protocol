# 🧾 PoC Protocol — Proof of Conversation

**PoC Protocol** is a decentralized system that enables two Ethereum wallets to mutually sign and cryptographically anchor a private conversation or agreement. It provides a verifiable, timestamped record of consent without revealing the actual message unless both parties agree.

> Built for trustless collaboration in freelancing, DAOs, Web3 deals, and creator communities.

---

## 🚀 Why PoC Protocol?

In Web3, we trust smart contracts but not conversations.

People make commitments over wallet chats, Telegram, Discord, and DMs every day. But there's no reliable proof that an agreement was made unless someone screenshots a message, and screenshots are not cryptographically verifiable.

**PoC Protocol solves this** by creating a lightweight "proof-of-agreement" system using:
- Wallets (for identity)
- Signatures (for intent)
- Hashing (for confidentiality)
- IPFS + Ethereum (for immutability)

---

## 🔐 Core Features

- ✅ **Wallet-based consent** via `eth_signMessage`
- ✅ **Dual-signature agreement** between two wallet addresses
- ✅ **IPFS anchoring** for message + signature bundle
- ✅ **On-chain registry (optional)** for timestamped proof
- ✅ **Privacy-preserving**: message stays off-chain unless revealed

---

## 🌍 Use Cases

| Scenario                  | Benefit |
|---------------------------|---------|
| 🤝 Web3 Freelancing        | Prove a client agreed to pay on delivery |
| 🏛 DAO Operations          | Capture verifiable off-chain decisions |
| 🎨 Creator Collaborations | Lock in shared creative rights or custom NFT terms |
| 📜 Token Deals             | Sign lightweight handshake agreements |
| 🗳 Governance              | Store consensus outside of Snapshot voting |

---

## 🛠 Tech Stack

- **React.js** – Frontend and UI
- **Ethers.js** – Wallet connection, signing, hashing
- **MetaMask** – Wallet provider (EIP-191 compliant)
- **IPFS via Infura** – Decentralized storage of signed data
- **keccak256** – Cryptographic hash for agreement proof
- **Jest** – Unit testing for hashing logic

---

## 📦 Getting Started (Local Dev)

```bash
git clone git@github.com:prakashpnvs/poc-protocol.git
cd poc-protocol
npm install
npm run start
```

---

## 🔄 How It Works

Imagine **Alice and Bob** want to create a cryptographic record that both agreed to a message — without revealing it publicly or storing it on-chain.

### 🧾 Agreement Flow

1. **Alice connects her MetaMask wallet**  
   → She is identified by her wallet address.

2. **Alice writes the agreement message**  
   → Example: `"I will pay 1 ETH for design services by Friday."`

3. **Alice signs the message using MetaMask**  
   → Her wallet generates a digital signature of the message.

4. **Alice sends the message + signature to Bob**  
   → This can be via email, wallet messaging (XMTP), or IPFS link.

5. **Bob connects his wallet and verifies Alice’s signature**  
   → He confirms that Alice agreed to the exact message.

6. **Bob signs the same message with his wallet**  
   → Now both parties have signed the exact same message.

7. **App generates a `keccak256` hash of the signed message**  
   → This acts as a verifiable digital fingerprint.

8. **Store the message, signatures, and hash on IPFS**  
   → The IPFS CID acts as a permanent, tamper-proof reference.

9. **Anyone can later verify:**
    - Both wallets signed the same message
    - Signatures match the message and the wallets
    - The message content hasn’t changed
    - The data was created at a specific point in time

---
