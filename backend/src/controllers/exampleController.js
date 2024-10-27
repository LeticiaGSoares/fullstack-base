import example from "../models/exampleModel.js"
import {z} from "zod";
import {formatZodError} from "../helpers/index.js"

// const createSchema = z.object({
//     example: z
//         .string()
//         .min(3, {error: "A example deve ter pelo menos 3 caracteres"})
//         .transform((txt)=> txt.toLowerCase()),
//     descricao: z
//         .string()
//         .transform((txt)=> txt.toLowerCase())
// })

// const getSchema = z.object({
//     example_id: z.string().uuid()
// })

// export const create = async (req, res) => {
//     const {example, descricao} = req.body
//     const bodyValidation = createSchema.safeParse(req.body)
//     if(!bodyValidation.success){
//         return res.status(400).json({
//             message: "Erro interno do servidor",
//             error: formatZodError(bodyValidation.error)
//         })
//     }

//     const status = 1
//     const novaexample = {
//         example,
//         descricao,
//         status
//     }

//     try{
//         await example.create(novaexample)
//         res.status(201).json({message: "example cadastrada"})
//     }catch (error){
//         console.error(error)
//         res.status(500).json({message: "Erro interno do servidor"})
//     }
// }

// //examples?page=3&limit=10
// export const getAll = async (req, res) => {
//     const page = parseInt(req.query.page) || 1
//     const limit = 3
//     const offset = (page - 1) * limit
//     try{
//         const examples = await example.findAndCountAll({
//             limit,
//             offset
//         })

//         const totalPaginas = Math.ceil(examples.count / limit)
//         res.status(200).json({
//             totalexamples: examples.count,
//             totalPags: totalPaginas,
//             pagAtual: page,
//             itensPorPag: limit,
//             ProximaPag: totalPaginas === 0 ? null : `http://localhost:3333/examples?page=${page + 1}`,
//             pagAnterior: page - 1 === 0 ? null : `http://localhost:3333/examples?page=${page - 1}`,
//             examples: examples.rows
//         });
//     }catch(error){
//         res.status(500).json({message: "Erro interno do servidor: "+ error})
//     }
// }

// export const getexample = async (req, res) => {
//     const {example_id} = req.params

//     const paramsValidation = getSchema.safeParse(req.params)
//     if(!paramsValidation.success){
//         res.status(400).json({
//             message: "Id da example é inválido",
//             error: paramsValidation.error
//         })
//         return
//     }

//     try{
//         const example = await example.findByPk(example_id)

//         if (!example) {
//             return res.status(404).json({message: `example ${example_id} não existe` });
//         } 

//         res.status(200).json({message: example})
//     }catch (error){
//         res.status(500).json({message: "Erro interno do servidor" + error})
//     }
// }

// export const updateexample = async (req, res) => {
//     const {example_id} = req.params
//     const {example, descricao, status} = req.body

//     const bodyValidation = createSchema.safeParse(req.body)
//     if(!bodyValidation.success){
//         return res.status(500).json({
//             message: "Erro interno do servidor",
//             error: formatZodError(bodyValidation.error)
//         })
//     }
    
//     const updatedexample = {
//         example, 
//         descricao, 
//         status
//     } 
    
//     try{
//         const [linhasAfetadas] = await example.update(updatedexample, {where : {id: example_id}})
//         if(linhasAfetadas <= 0){ 
//             return res.status(404).json({message: "example não encontrada"})
//         }
        
//         res.status(200).json({message: "example atualizada"})
//     }catch(error){
//         res.status(500).json({message: "Erro interno do seridor" + error});
//     }
// }

// const buscarexampleSituacaoSchema = {
//     situacao: z.enum(["pendente", "concluida"])
// }

// const updateexampleSchema = {
//     example: z
//         .string()
//         .min(3, {message: "A example deve ter pelo menos 3 caracteres"})
//         .transform((txt) => txt.toLowerCase()),
//     descricao: z
//         .string()
//         .min(5, {message: "A example deve ter pelo menos 5 caracteres"}),
//     situacao: z.enum(["pendente","concluida"]),
// }

// export const updateStatus = async (req, res)=> {
//     const {example_id} = req.params

//     const paramsValidation = getSchema.safeParse(req.params)
//     if(!paramsValidation.success){
//         res.status(400).json({
//             message: "Id da example é inválido",
//             error: paramsValidation.error
//         })
//         return
//     }

//     try{
//         const example = await example.findByPk(example_id)

//         if (!example) {
//             return res.status(404).json({message: `example ${example_id} não existe` });
//         }
        
//         const status = example.dataValues.status === "pendente"? 2 : 1

//         const updatedexample = {
//             status
//         }

//         const [linhasAfetadas] = await example.update(updatedexample, {where : {id: example_id}})
//         if(linhasAfetadas <= 0){ 
//             return res.status(404).json({message: "example não encontrada"})
//         }

//         res.status(200).json({message: "example atualizada"})
//     }catch(error){
//         res.status(500).json({message: "Erro interno do seridor" + error});
//     }
// }

// export const getTaskByStatus = async (req, res) => {
//     const {situacao} = req.params
    
//     try{
//         const example = await example.findAll({ where: { status: situacao}})

//         if (!example) {
//             return res.status(404).json({message: `example com status ${situacao} não existe` });
//         } 

//         res.status(200).json({message: example})

//     }catch(error){
//         res.status(500).json({message: "Erro interno do servidor" + error})
//     }
// }