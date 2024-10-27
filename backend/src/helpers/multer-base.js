// import express from 'express' //cria o servidor web
// import multer from 'multer' //envio de arquivos por form HTML
// import path from "node:path" //pra trabalhar com caminhos de arquivos
// import { fileURLToPath } from 'node:url' //converte URL de arquivo p/ um caminho de sistema de arquivos

// // Definindo a porta
// const PORT = 3333;


// const app = express() // Inicializando o aplicativo Express
// app.use(express.json())// faz com que o req.body seja sempre convertido para JSON

// const __filename = fileURLToPath(import.meta.url); //retorna o nome desse arquivo (server.js) usando fileURLPath 
// const __dirname = path.dirname(__filename); //retorna o diretório (/tutorial) a partir do endereço do arquivo que já foi pego usando fileURLToPath

// const uploadsFolder = //A const define o diretório onde os arquivos do req.body serão armazenados
// path.resolve(__dirname, 'uploads');
// //normaliza o caminho para funcionar em qualquer SO. ex.:
// //path.resolve('/foo/bar', './baz');
// // Retorna: '/foo/bar/baz'

// // Configuração do multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, uploadsFolder); 
//         // Pasta onde os arquivos serão salvos
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname)); 
//         // Renomeia o arquivo
//     }
// });

// const upload = multer({ storage: storage });

// // Rota para upload de 1 rota que aceita 1 arquivo
// app.post(
//     '/upload', 
//     upload.single('file'), //.single aceita apenas um arquivo, mas .array aceita múltiplos arquivos enviados em um capo só.
//     //Acita como parâmetro o nome do campo do formulário onde será recebido o arquivo 
//     (req, res) => {
//     if (!req.file) {
//         return console.log('Nenhum arquivo foi enviado.');
//     }
//     console.log(`Arquivo ${req.file.filename} enviado com sucesso!`);
// });

// // Rota para upload de mais de 1 rota que pode aceitar mais de 1 arquivo
// app.post(
//     '/upload-more', 
//     upload.fields([
//     { name: 'documents', maxCount: 2 },   // campo 'documents', até 2 arquivos
//     { name: 'images', maxCount: 3 }       // campo 'images', até 3 arquivos
//     //poderia ser utilizado upload.single() para cada campo, caso sejam poucos, mas .fields é uma maneira mais robusta.
//   ]), (req, res) => {
//     console.log('Arquivos enviados:');
//     console.log(req.files); // Aqui você terá acesso aos arquivos enviados
  
//     if (!req.files || (!req.files.documents && !req.files.images)) {
//       return res.status(400).send('Nenhum arquivo foi enviado.');
//     }
  
//     res.send('Arquivos enviados com sucesso!');
//   });

// // Iniciando o servidor
// app.listen(PORT, () => {
//     console.log(`Servidor rodando em http://localhost:${PORT}`);
// });