/* importar as configurações do servidor */
var app = require('./config/server.js')

/* parametrizar a posta de escuta */
app.listen(80, function(){
    console.log('Servidor online');
})