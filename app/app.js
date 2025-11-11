#!/usr/bin/env node
// app.js - simple one-file web app (no external deps)
 
const http = require("http");
const port = process.env.PORT || 80;
 
const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("healthy ✅");
  }
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from AWS DevOps Assignment 🚀");
});
 
server.listen(port, () => console.log(`Server running on port ${port}`));
