import express from "express"
import { sequelize } from "./database"
import { adminJs, adminJsRouter } from "./adminjs"
import { router } from "./routes"

const app = express()


app.use(express.static('public'))

app.use(adminJs.options.rootPath, adminJsRouter)
//indica o caminho no navegador

app.use(router)

const PORT = process.env.PORT || 3000 
//cria-se a variável PORT e a partir dela, puxa a porta já definida nas variáveis de ambiente
//caso não exista, ele vai para a 3000

app.listen(PORT, () => {
     sequelize.authenticate().then(() => {
        console.log('DB connection successfull')
    })
    console.log(`Server started successfuly at port ${PORT}`); 
})
