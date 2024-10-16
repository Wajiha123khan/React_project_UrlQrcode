const { urlDatabase } = require("../routes/createShlink");

const longUrlController = (req, res) => {
  const { shortId } = req.params;
  const longUrl = urlDatabase[shortId];

  if (longUrl) {
    res.redirect(longUrl );
  } else {
    res.status(404).json({ error: "URL not found" });
  }
}

module.exports = longUrlController