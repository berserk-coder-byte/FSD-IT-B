const http = require("http");
const fs = require("fs");
const PORT = 5000;
const app= http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.end();
    return;
  }
  if (req.method === "GET" && req.url === "/read") {
    fs.readFile("data.txt", "utf-8", (err, data) => {
      if (err) {
        res.end("Error reading file");
        return;
      }
      res.end(data);
    });
  }
  else if (req.method === "POST" && req.url === "/write") {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
    });
    req.on("end", () => {
      fs.writeFile("data.txt", body, (err) => {
        if (err) {
          res.end("Error writing file");
          return;
        }
        res.end("File written successfully");
      });
    });
  }
  else {
    res.end("Invalid route");
  }
});
app.listen(PORT, () => {
  console.log("Server running on http://localhost:5000");
});
