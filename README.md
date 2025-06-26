# 🧾 PoC Protocol — Proof of Conversation

**PoC Protocol** is a decentralized system that enables two wallets to mutually sign and cryptographically anchor a private conversation or agreement. It provides a verifiable, timestamped record of consent — without revealing the actual message content unless both parties choose to.

> Designed for trustless collaboration in freelancing, DAOs, Web3 deals, and creator communities.

---

## 🚀 Why PoC Protocol?

In Web3, we trust smart contracts — but not conversations.

People make commitments over wallet chats, Telegram, Discord, and DMs every day. But there's no reliable proof that an agreement was made unless someone screenshots a message — and screenshots are not cryptographically verifiable.

**PoC Protocol solves that** by creating a lightweight, legal-lite proof-of-agreement system powered by wallets, signatures, IPFS, and (optionally) on-chain anchoring.

---

## 🔐 Core Features

- ✅ **Wallet-based consent** using `eth_signMessage`
- ✅ **Mutual agreement workflow** between two wallet addresses
- ✅ **Optional IPFS anchoring** for message hashes
- ✅ **Smart contract registry** for on-chain timestamping
- ✅ **Privacy-preserving**: messages stay off-chain unless revealed

---

## 🌍 Use Cases

| Scenario                  | Value |
|---------------------------|-------|
| 🤝 Web3 Freelancing        | Prove that a wallet agreed to pay on delivery |
| 🏛 DAO Operations          | Snapshot verifiable agreements between members |
| 🧑‍🎨 Creator Collaborations | Lock in shared creative rights or custom NFT terms |
| 📜 Token Deals             | Proof of handshake terms without NDAs |
| 🗳 Governance              | Vouch for consensus decisions outside Snapshot |

---

## 🛠 Tech Stack

- **React** + **Ethers.js** (frontend wallet UX)
- **XMTP** (wallet messaging – coming soon)
- **IPFS** (hash storage of signed agreements)
- **Ethereum Smart Contract** (on-chain proof anchoring)
- **MetaMask / WalletConnect** (wallet auth & signing)

---

## 🧪 Demo Preview (MVP)

1. Wallets A and B connect to the app
2. They enter a shared message or agreement text
3. Both parties sign it
4. The message is hashed and:
    - Uploaded to IPFS
    - Anchored on-chain via smart contract
5. A public proof viewer can verify:
    - Wallets involved
    - Timestamp
    - Agreement hash
    - Optional reveal of content (with consent)

---

## 🧱 Smart Contract

Solidity-based registry to store:
- `walletA`
- `walletB`
- `proofHash`
- `timestamp`

Includes verification logic to confirm mutual participation.

---

## 📦 Getting Started (Local Dev)

```bash
git clone git@github.com:prakashpnvs/poc-protocol.git
cd poc-protocol
npm install
npm run start
