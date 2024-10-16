const express = require("express");
const shortenLinkController = require("../controllers/shortenLinkController");
const longUrlController = require("../controllers/longUrlController");
const router = express.Router();
const { customAlphabet } = require("nanoid");

// Function to generate a short URL
const nanoid = customAlphabet(
  "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  6
);

// Public domain for the short URLs
const publicDomain = "https://localhost:3000";

const urlDatabase = {};

router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json({ error: "Long URL is required" });
  }

  const shortId = nanoid();
  urlDatabase[shortId] = longUrl;

  const shortUrl = `${publicDomain}/${shortId}`;

  res.json({ shortUrl });
});

router.get("/:shortId", (req, res) => {
  const { shortId } = req.params;
  const longUrl = urlDatabase[shortId];

  if (longUrl) {
    // res.json({ longUrl });
    res.redirect(longUrl);
  } else {
    res.status(404).json({ error: "URL not found" });
  }
});

module.exports = router;
module.exports.urlDatabase = urlDatabase;
