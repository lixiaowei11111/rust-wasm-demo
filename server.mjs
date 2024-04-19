import http from "node:http"
import fs from 'node:fs'

const reqListener = function(req, res) {
    const f = req.url === '/' ? 'index.html' : './pkg/wasm_demo_bg.wasm';
    if (f === './pkg/wasm_demo_bg.wasm') {
        res.setHeader('Content-type', 'application/wasm')
      }
      res.writeHead(200)
      return fs.createReadStream(f).pipe(res)
}

const server = http.createServer(reqListener);
server.listen(8081);
console.log('listening: http://localhost:8081')
