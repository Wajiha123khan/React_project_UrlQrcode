const { customAlphabet } = require("nanoid");
const { urlDatabase } = require("../routes/createShlink");


// Function to generate a short URL
const nanoid = customAlphabet(
  "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  6
);

// Public domain for the short URLs
const publicDomain = "https://localhost:3000";

const shortenLinkController = async (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json({ error: "Long URL is required" });
  }

  const shortId = nanoid();
  urlDatabase[shortId] = longUrl;

  const shortUrl = `${publicDomain}/${shortId}`;

  res.json({ shortUrl });
};

module.exports = shortenLinkController;
