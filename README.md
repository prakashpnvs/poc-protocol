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

- **React.js** — User interface for signing and proof generation
- **Ethers.js** — Wallet connection, signing, and hashing
- **MetaMask** — Wallet authentication (WalletConnect coming soon)
- **IPFS** — Decentralized storage of the signed agreement
- **Ethereum (Solidity)** — (Planned) anchoring hash proofs on-chain
- **XMTP** — (Planned) Wallet-to-wallet encrypted messaging

---

## 🧪 Demo Workflow (MVP)

1. Wallet A types a shared message
2. Wallet A signs it using MetaMask
3. The message + signature are hashed and uploaded to IPFS
4. The hash can optionally be anchored on-chain
5. Wallet B (in future versions) also signs the same message

> Current version supports single-wallet signing and verification

---

## 📦 Getting Started (Local Dev)

```bash
git clone git@github.com:prakashpnvs/poc-protocol.git
cd poc-protocol
npm install
npm run start
