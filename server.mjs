import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('./', import.meta.url));
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8' };
createServer(async (req, res) => {
 const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
 const file = normalize(join(root, pathname === '/' ? 'index.html' : pathname));
 try { if (!file.startsWith(root)) throw Error(); const body = await readFile(file); res.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' }); res.end(body); }
 catch { res.writeHead(404); res.end('Not found'); }
}).listen(Number(process.env.PORT || 4173), '127.0.0.1', () => console.log(`Slovak study: http://127.0.0.1:${process.env.PORT || 4173}`));
