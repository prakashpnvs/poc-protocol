import React, { useState } from "react";
import { ethers } from "ethers";
import { uploadToIPFS } from "./utils/ipfsService";
import { verifySignature } from "./utils/verifySignature";
import { hashAgreement } from "./utils/hashAgreement";

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
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>PoC Protocol</h1>
      {!wallet ? (
        <button onClick={connectWallet}>🔐 Connect Wallet</button>
      ) : (
        <p><strong>Connected:</strong> {wallet}</p>
      )}
      <textarea placeholder="Type the agreement..." value={message} onChange={(e) => setMessage(e.target.value)} rows={4} cols={60} />
      <br />
      <button onClick={signMessage}>✍️ Sign Message</button>
      {signature && (<textarea readOnly value={signature} rows={3} cols={60}></textarea>)}
      <br />
      <button onClick={uploadProof} disabled={!signature}>📦 Upload to IPFS</button>
      {ipfsCid && (<p>✅ IPFS CID: <a href={`https://ipfs.io/ipfs/${ipfsCid}`} target="_blank" rel="noreferrer">{ipfsCid}</a></p>)}
      {hash && <p><strong>Hash of Proof:</strong> {hash}</p>}
      <button onClick={verify} disabled={!signature}>🔍 Verify Signature</button>
      {verified && <p style={{ color: 'green' }}>✅ Signature verified!</p>}
    </div>
  );
}

export default App;
