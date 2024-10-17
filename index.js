import http from "http";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// It basically returns this: const filePath = path.join(__dirname, 'index.html'), except you choose the file it returns
function filePathGenerator(fileName) {
  return path.join(__dirname, `${fileName}`);
}

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    try {
      const data = await readFile(filePathGenerator("index.html"), "utf8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 - Internal Server Error");
    }
  } else if (req.url === "/about.html") {
    try {
      const data = await readFile(filePathGenerator("about.html"), "utf8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 - Internal Server Error");
    }
  } else if (req.url === "/contact-me.html") {
    try {
      const data = await readFile(filePathGenerator("contact-me.html"), "utf8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 - Internal Server Error");
    }
  } else {
    try {
      const data = await readFile(filePathGenerator("404.html"), "utf8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 - Internal Server Error");
    }
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
