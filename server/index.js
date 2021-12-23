// server/index.js
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
//const cors = cors1();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
//app.use(cors());

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

app.get('/fantoms_api', (req, res) => {
  const id = req.query.id;
  res.json({ name: "Fantom " + id, image: "https://mint.fantoms.art/imagesa/" + id + ".png", id: id, description: "A cute little ghost" })
})

app.get('/feggz_api', (req, res) => {
  const id = req.query.id;
  console.log(id)
  if (id == "665" || id == 665) {
    res.json({ name: "Feggz #" + id, image: "https://ipfs.io/ipfs/QmRv1Vveqx4LVdFk1R3wyTtpdau4gkb7BvWRG7825B83qz/-666.gif", id: (parseInt(id)+1).toString(), description: "Fancy Eggz #666" })
  } else {
    res.json({ name: "Feggz #" + (parseInt(id)+1).toString() , image: "https://ipfs.io/ipfs/QmRv1Vveqx4LVdFk1R3wyTtpdau4gkb7BvWRG7825B83qz/-" + (parseInt(id)+1).toString() + ".jpg", id: (parseInt(id)+1).toString(), description: "Fancy Eggz #" + (parseInt(id)+1).toString()})
  }
})

app.get('/cyber_api', (req, res) => {
  const id = req.query.id;
  res.json({ name: "Cyber Fantom " + id, image: "https://raw.githubusercontent.com/Pokesi/blksite/main/images/" + id + ".png", id: id, description: "A hardcore cyberpunk ghost. And it's not a phase." })
})

app.get('/wbcyborgs', (req, res) => {
  const id = req.query.id;
  res.json({ name: "WBCyborg #" + id, image: "https://gateway.pinata.cloud/ipfs/QmUbFRfGXwzU5GCDWfBNtGr8fsuxkVjvoenVtaaNuD1nB2/" + id + ".png", id: id, description: "WBCyborg #" + id })
})

app.get('/personal_api', (req, res) => {
    const id = req.query.id || "ERROR";
    if (id == '1' || id == 1) {
        res.json({ name: 'invasion', image: 'https://raw.githubusercontent.com/Pokesi/blksite/main/10613_Glitch.jpg', id: 'RandomArt Piece ' + id, description: "inspired by a recurring dream I had, 'invasion' is a piece of photography mixed in with a little touch of originality" });
    } else if (id == '2' || id == 2) {
        res.json({ name: 'looping', image: 'https://raw.githubusercontent.com/Pokesi/blksite/main/NshRc4SSXKB86Cx2FB2W.jpg', id: 'RandomArt Piece ' + id, description: "recursion error" });
    } else if (id == '3' || id == 3) {
        res.json({ name: 'end it', image: 'https://raw.githubusercontent.com/Pokesi/blksite/main/oiNvW3RHxLYu02tRlk8E.jpg', id: 'RandomArt Piece ' + id, description: "all stories must come to an end" });
    } else if (id == '4' || id == 4) {
        res.json({ name: 'and it went', image: 'https://raw.githubusercontent.com/Pokesi/blksite/main/y1orjoT1ygoUjATooSPP.jpg', id: 'RandomArt Piece ' + id, description: "theres so much going on, but it would take nothing to end it all" });
    } else {
        res.json({ error: 'ERROR'});
    }
});
app.get('/spiritswap', (req, res) => {
    const id = req.query.id;
    if (id == '1' || id == 1) {
        res.json({ name: 'Fog Soully Fantom', image: 'https://spirit.fantoms.art/1.png', id: id, description: 'SpiritSwap x Fantoms on Opera piece #1.'});
    } else if (id == '2' || id == 2) {
        res.json({ name: 'Soully Fantom Grave', image: 'https://spirit.fantoms.art/2.png', id: id, description: 'SpiritSwap x Fantoms on Opera piece #2.'});
    } else if (id == '3' || id == 3) {
        res.json({ name: 'Soully Fantom Bros.', image: 'https://spirit.fantoms.art/3.png', id: id, description: 'SpiritSwap x Fantoms on Opera piece #3.'});
    } else if (id == '4' || id == 4) {
        res.json({ name: 'Creator Soully Fantom', image: 'https://spirit.fantoms.art/4.gif', id: id, description: 'SpiritSwap x Fantoms on Opera piece #3.'});
    } else if (id == '5' || id == 5) {
        res.json({ name: 'Camouflage Soully Fantom', image: 'https://spirit.fantoms.art/5.png', id: id, description: 'SpiritSwap x Fantoms on Opera piece #5.'});
    }
});
app.get('/special', (req, res) => {
    const id = req.query.id;
    if (id == '1' || id == 1) {
        res.json({ name: 'Christmas Fantom', image: 'https://mint.fantoms.art/Special1.png', id: id, description: 'Merry christmas to all the fantom community!'});
    }
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
