import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [signature, setSignature] = useState("");

  const connectWallet = async () => {
    if (!window.ethereum) return alert("MetaMask required");
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    setWalletAddress(accounts[0]);
  };

  const signMessage = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const message = "We agree to the terms of PoC Protocol.";
    const sig = await signer.signMessage(message);
    setSignature(sig);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>PoC Protocol</h1>
      {!walletAddress ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <>
          <p><strong>Connected:</strong> {walletAddress}</p>
          <button onClick={signMessage}>Sign Message</button>
          {signature && (
            <div>
              <p><strong>Signature:</strong></p>
              <textarea value={signature} readOnly rows={5} cols={60}></textarea>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
