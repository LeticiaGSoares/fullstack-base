// import express from 'express'
// import bcrypt from 'bcrypt'

// const PORT = 3333

// const app = express()
// app.use(express.json())

// let users = [] //armazenar usuários sem banco de dados

// app.post('/signup', async (req, res) => {
//     const {email, password} = req.body

//     //verificar se o email já existe
//     const existingEmail = users.find(u => u.email === email)
//     if(existingEmail){
//         return res.status(400).json({message: "Email já existe"})
//     }

//     //Hash de senha
//     const hashedPassword = await bcrypt.hash(password, 10);
//     //o hash é único para cada entrada. os parâmetros são a senha a ser criptografada e um 'salt', que garante que mesmo que duas senhas sejam iguais, terão hashes diferentes. 'saltRounds' é a quantidade de vezes que o hash será aplicado na mesma senha.
    
//     users.push({email, password: hashedPassword})
//     res.status(201).json({message: 'Usuário registrado com sucesso'})
// });

// app.post('/login', async (req, res) => {
//     const {email, password} = req.body

//     //verifica se o email existe
//     const user = users.find(u => u.email === email)
//     if(!user) {
//         return res.status(400).json({messag: "Conta não registrado no banco de dados"})
//     }
//     const isPasswordValid = await bcrypt.compare(password, user.password)
//     //hasha automaticamente a senha para compará-la à armazenada no banco de dados

//     if(!isPasswordValid) {
//         return res.status(400).json({message: "Senha incorreta"})
//     }

//     res.status(200).json({message: "Login bem-sucedido"})
// })

// app.get('/', (req, res)=> {
//     res.json(users)
// })

// app.listen(PORT)