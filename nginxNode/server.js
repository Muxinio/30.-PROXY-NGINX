/*
para utilizar el servidor 1 y 2 usar los siguientes comandos 
pm2 start nginxNode/server.js --name="sever 1" --watch -- 8080         MODO FORK
pm2 start nginxNode/server.js --name="sever 2" --watch -i 1 -- 8081      MODO CLOUSTER                
pm2 start nginxNode/server.js --name="Sever 3" --watch -- 8082      MODO FORK
pm2 start nginxNode/server.js --name="Sever 4" --watch -i 1  -- 8083  MODO CLOUSTER
pm2 start nginxNode/server.js --name="Sever 5" --watch -i 1  -- 8084  MODO CLOUSTER
pm2 start nginxNode/server.js --name="Sever 6" --watch -i 1  -- 8085   MODO CLOUSTER
-------------------------------------
pm2 delete all
pm2 list
pm2 delete id/name
pm2 monit
pm2 --help
pm2 logs
pm2 flush
-----------------------------------------
start nginx
nginx -s reload
nginx -s quit
-----------------------------------------
otros comandos cmd
tasklist /fi "imagename eq nginx.exe" muestra las instancias ejecutadas 
wmic process where name='nginx.exe' delete matar todas las instancias 
-------------------------------------------
*/
const express = require('express')
const app = express()

const PORT = parseInt(process.argv[2]) || 8080

app.get('/api/randoms', (req,res) => {
    console.log(`port: ${PORT} -> Fyh: ${Date.now()}`)
res.send(`Servidor express <span style="color:blueviolet;">(Nginx)</span> en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)})
app.listen(PORT, err => {
    if(!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
})



