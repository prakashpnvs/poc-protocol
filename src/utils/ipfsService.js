export async function uploadToIPFS(data) {
  const body = new Blob([JSON.stringify(data)], { type: "application/json" });
  const formData = new FormData();
  formData.append("file", body);

  const res = await fetch("https://ipfs.infura.io:5001/api/v0/add", {
    method: "POST",
    body: formData,
  });

  const text = await res.text();
  const cid = text.match(/"Hash":"([^"]+)"/);
  if (cid && cid[1]) {
    return cid[1];
  } else {
    throw new Error("IPFS upload failed");
  }
}
