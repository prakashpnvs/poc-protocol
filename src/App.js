import React, { useState } from "react";
import { ethers } from "ethers";
import { uploadToIPFS } from "./utils/ipfsService";
import { verifySignature } from "./utils/verifySignature";
import { hashAgreement } from "./utils/hashAgreement";
import "./App.css";

function App() {
  const [wallet, setWallet] = useState("");
  const [message, setMessage] = useState("");
  const [signature, setSignature] = useState("");
  const [ipfsCid, setIpfsCid] = useState("");
  const [verified, setVerified] = useState(false);
  const [hash, setHash] = useState("");

  const connectWallet = async () => {
    if (!window.ethereum) return alert("MetaMask required");
    const [account] = await window.ethereum.request({ method: "eth_requestAccounts" });
    setWallet(account);
  };

  const signMessage = async () => {
    if (!message) return alert("Enter a message");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const sig = await signer.signMessage(message);
    setSignature(sig);
  };

  const uploadProof = async () => {
    const proofHash = hashAgreement(message, signature);
    setHash(proofHash);
    const cid = await uploadToIPFS({ message, signature, hash: proofHash });
    setIpfsCid(cid);
  };

  const verify = async () => {
    const result = await verifySignature(message, signature, wallet);
    setVerified(result);
  };

  return (
    <div className="container">
      <h1>PoC Protocol</h1>
      <div className="section">
        <button onClick={connectWallet}>🔐 {wallet ? "Wallet Connected" : "Connect Wallet"}</button>
        {wallet && <p><strong>Wallet:</strong> {wallet}</p>}
      </div>

      <div className="section">
        <label>Agreement Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} />
      </div>

      <div className="section">
        <button onClick={signMessage}>✍️ Sign Message</button>
        {signature && (
          <>
            <label>Signature:</label>
            <textarea readOnly value={signature} rows={3} />
          </>
        )}
      </div>

      <div className="section">
        <button onClick={uploadProof} disabled={!signature}>📦 Upload to IPFS</button>
        {ipfsCid && <p>✅ <strong>IPFS CID:</strong> <a href={`https://ipfs.io/ipfs/${ipfsCid}`} target="_blank" rel="noreferrer">{ipfsCid}</a></p>}
        {hash && <p><strong>Hash:</strong> {hash}</p>}
      </div>

      <div className="section">
        <button onClick={verify} disabled={!signature}>🔍 Verify Signature</button>
        {verified && <p className="success">✅ Signature Verified</p>}
      </div>
    </div>
  );
}

export default App;
