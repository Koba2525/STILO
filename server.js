// ლოკალური სატესტო სერვერი — მხოლოდ ჩატის შესამოწმებლად კომპიუტერზე.
// Netlify-ს ეს ფაილი არ სჭირდება (შეგიძლია წაშალო).
const http = require('http');
const fs = require('fs');
const path = require('path');
const { handler } = require('./netlify/functions/chat.js');

const ROOT = __dirname;
const PORT = 8888;
const MIME = {
    '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
    '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.jfif': 'image/jpeg',
    '.svg': 'image/svg+xml', '.xml': 'application/xml', '.txt': 'text/plain', '.ico': 'image/x-icon'
};

http.createServer(async (req, res) => {
    if (req.method === 'POST' && req.url.startsWith('/.netlify/functions/chat')) {
        let body = '';
        req.on('data', c => body += c);
        req.on('end', async () => {
            try {
                const r = await handler({ httpMethod: 'POST', body });
                res.writeHead(r.statusCode, { 'Content-Type': 'application/json' });
                res.end(r.body);
            } catch (e) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ reply: 'server error: ' + e.message }));
            }
        });
        return;
    }
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    if (urlPath === '/') urlPath = '/index.html';
    const filePath = path.join(ROOT, urlPath);
    if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end('forbidden'); return; }
    fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('not found'); return; }
        res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
        res.end(data);
    });
}).listen(PORT, () => console.log('LOCAL TEST SERVER running: http://localhost:' + PORT));
