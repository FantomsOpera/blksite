// server/index.js
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
app.get("/api", (req, res) => {
  res.json({ message: "running...", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});

app.get("/", (req, res) => {
  res.json({ message: "NFT Thingo running :P", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});

app.get("/0", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/Qmbhr6i2KBPReiG7HqFMXsiRvFMoESPfcxt7padn3mb7bR", id: "0", name: "Cabinet 1", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/1", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmNPmHAnuW7xGqLtBW9679c1B1yuGMyc4yXTjG1unry2dV", id: "1", name: "Cabinet 2", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/2", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmZRBxgm3TSB8vGWwVkhLLvEGavwUKsd1mrGWuYyyc9m6u", id: "2", name: "Cabinet 3", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/3", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmZ8U7rnN73LgSE13Wxh7CNcsYH69yiagbN32eo3pH5VmQ", id: "3", name: "Cabinet 4", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/4", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmdvXHJrdSTA9wN1PkLwAJPkQr6GMKcsLMTDZDSc9Z48m8", id: "4", name: "Cabinet 5", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/5", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmZRwm6HCAMrUyN4audMmL8FuqqiBpWGy82sRb9vzdr6kt", id: "5", name: "Cabinet 6", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/6", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmaXPSZ2NbVaWNC2uML3eMsvrHaYoLS7zSkS2ufLhpS9C8", id: "6", name: "Cabinet 7", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/7", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmUY9umUUBqVbPJxrUt7ZYmaCkpBfGGbCpaksowvHrZxcU", id: "7", name: "Cabinet 8", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/8", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmPHmhTqxZozTdZUKQ8cD4UErRVyH49LjJnUoHogCv9UWK", id: "8", name: "Cabinet 9", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/9", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmUn4rQNgmB5tiktG4KhWDqTxXvoS8XSEKkJPKhRf9mAUH", id: "9", name: "Cabinet 10", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/10", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmQf3QYj3ah3TBRoxnoW9NRZHhhcGnGeX1oDzbxxyz33tg", id: "10", name: "Cabinet 11", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/11", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmZFQgcRDofEdqxzVtfbmCouXWtkfZp9PCG22ctGJ5F8kN", id: "11", name: "Cabinet 12", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/12", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmPxunJTEYGzNo5bd6KddSNAX1QBPgzFnkKyhsmzxmBNuq", id: "12", name: "Cabinet 13", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/13", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmcvWWLgTetMezb3HJUo8X9GJ6SzC8MnVjTqDgrZStg4pV", id: "13", name: "Cabinet 14", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/14", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmU7dv3RBvkckNX3VxdjFXiPmNPzLjXXUrUABeS5k1k4cm", id: "14", name: "Cabinet 15", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/15", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmWHyGLGvFdjueH6FBUhtPCoSMdxaTEw84VE1YVeqb7cZs", id: "15", name: "Cabinet 16", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/16", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmS8rrQfySHTvseuphxYMTtHdTyKXjwk37dcDj3mZhbF7D", id: "16", name: "Cabinet 17", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/17", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmfJxqFMAAvJVx7emRrBqBvTTFMREynHh3NpV3SYRoomgw", id: "17", name: "Cabinet 18", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/18", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmZpHcA7UBCAiY3v4G1rGsb1kGYFRT7p4ULozZiVZLaHNz", id: "18", name: "Cabinet 19", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/19", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmZKf6iaQzmCmemKBSA2F9KV8pPJiEHjtEAyWagUCm54e7", id: "19", name: "Cabinet 20", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/20", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmVWCFX2YTB2DgW5onSDF5hSy1CKDEs7F843tn34u4xbLo", id: "20", name: "Cabinet 21", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/21", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmbFKLmQevpyqeoZ5ezrPEecEcaM8xvy6ZNwWcgB9RYvs7", id: "21", name: "Cabinet 22", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/22", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmbGs6MYyfCYcuvPGzSSsjW8g4BT9jxpAg3ZA6wknFLpaa", id: "22", name: "Cabinet 23", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/23", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmYYkkmSVWbhjWz3yxVYkYBQfNE4N14nM7gnQxaaGzqWom", id: "23", name: "Cabinet 24", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/24", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmR44s6yZ9GWunPXTXDgpLuqJUkbZ752bJgZErxvGRNEQa", id: "24", name: "Cabinet 25", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/25", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmTxg25HGYzKEcY2Hd4BSN86bSro5rhjkiyN58QFEtRHUu", id: "25", name: "Cabinet 26", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/26", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/Qmd3R6n92Diw9wmpd82BANa7YMa9TLiW4KDVCWZoe6yVYY", id: "26", name: "Cabinet 27", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/27", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmRYMsyb7uMY6PonQGrkBMeGwZ7GuuFp53PasWJuKpD9aL", id: "27", name: "Cabinet 28", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/28", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmQTptEVxNSqpmYFwKnR9gHLwG6qqzpj5kN2szBB51rsn6", id: "28", name: "Cabinet 29", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});
app.get("/29", (req, res) => {
  res.json({ image: "https://cloudflare-ipfs.com/ipfs/QmUhugabfXjjrmM3qfREB61dUKW2ngZtbDiujDMXdG2yVt", id: "29", name: "Cabinet 30", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
