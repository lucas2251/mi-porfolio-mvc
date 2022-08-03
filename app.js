const express = require("express")
const app = express();
const path = require('path');
const port = 3010;
const mainrouter = require('./routers/main');


app.use(express.static(path.resolve(__dirname, "public")))



app.use(express.static('public'));
app.use('/', mainrouter);
app.use("/about", mainrouter)


app.listen(port, () => { console.log(`Servidor funcionando en http://localhost:${port}`) })
