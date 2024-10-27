// import express from 'express'
// import jwt from 'jsonwebtoken'
// import cookieParser from 'cookie-parser';

// const PORT = 3333
// const JWT_PASSWD = 'senhasuperdifícil' //senha para assinar os tokens

// const app = express()
// app.use(express.json())

// let users = []

// //a rota /signup não possui nenhuma alteração do jwt
// app.post('/signup', async (req, res) => {
//     const {email, password} = req.body

//     //Verifica se o email ja existe
//     const existingEmail = users.find(u => u.email === email)
//     if(existingEmail){
//         return res.status(400).json({message: 'Usuário já existe'})
//     }

//     users.push({ email, password});
//     res.status(200).json({message: "Usuário cadastrado com sucesso"})
// })

// app.post('/login', (req, res)=> {
//     const {email, password} = req.body

//     const user = users.find(u=> u.email === email)
//     if(!user){
//         return res.status(400).json({message: "Usuário não encontrado"})
//     }

//     const isValidPassword = user.password === password
//     if(!isValidPassword){
//         return res.status(401).json({ message: 'Senha incorreta' });
//     }

//     //O access token tem um curto período, ideal para API protegidas
//     const accessToken = jwt.sign({ username }, SECRET_KEY, { expiresIn: '15m' });
//     //O RefreshToken expira em um tempo muito maior, permitindo que o usuário não precise fazer login novamente
//     const refreshToken = jwt.sign({ username }, SECRET_KEY, { expiresIn: '30d' });

//     //Para isso, é necessário o "cookie-parser"
//     // O cookie HTTP-only não pode ser acessado por JavaScript, o que o protege de ataques XSS.
//     res.cookie('refreshToken', refreshToken, {
//         httpOnly: true,    // Impede que o JavaScript do navegador acesse o cookie
//         secure: true,      // Envia o cookie apenas em conexões HTTPS (ideal para produção)
//         sameSite: 'Strict', // Protege contra CSRF ao restringir o envio do cookie a requisições do mesmo site
//         maxAge: 30 * 24 * 60 * 60 * 1000 // Tempo de expiração do cookie (30 dias em milissegundos)
//     });

//     // O Access Token é enviado no corpo da resposta como um JSON.
//     // Ele é usado pelo cliente (normalmente armazenado em localStorage ou sessionStorage) para autenticar requisições subsequentes.
//     res.json({ accessToken });
// });

// // Rota protegida (apenas acessível com Access Token válido)
// app.get('/protected', (req, res) => {
//     // O token JWT é passado no cabeçalho Authorization (Bearer Token)
//     const authHeader = req.headers.authorization;
//     const token = authHeader && authHeader.split(' ')[1];  // Extrai o token após "Bearer ", pois aparece assim: aparece assim: authorization: Bearer <token>

//     if (!token) return res.sendStatus(401); //401 = não autorizado

//     jwt.verify(token, SECRET_KEY, (err, user) => {
//         if (err) return res.sendStatus(403); //403 = proibido (token inválido)
//         res.json({ message: 'Você está autenticado', user });
//     });
// });

// // Rota de renovação do Access Token
// app.post('/refresh', (req, res) => {
//     // Extrai o Refresh Token do cookie
//     const refreshToken = req.cookies.refreshToken;

//     if (!refreshToken) return res.sendStatus(401); // Refresh token não encontrado

//     // Verifica se o Refresh Token é válido
//     jwt.verify(refreshToken, JWT_PASSWD, (err, user) => {
//         if (err) return res.sendStatus(403); // Refresh token inválido ou expirado

//         // Se o refresh token for válido, cria um novo Access Token
//         const newAccessToken = jwt.sign({ email: user.email }, JWT_PASSWD, { expiresIn: '15m' });

//         // Envia o novo Access Token de volta para o cliente
//         res.json({ accessToken: newAccessToken });
//     });
// });

// app.listen(PORT)