import express from "express"
import { sequelize } from "./database"

const app = express()

const PORT = process.env.PORT || 3000 
//cria-se a variável PORT e a partir dela, puxa a porta já definida nas variáveis de ambiente
//caso não exista, ele vai para a 3000

app.listen(PORT, () => {
     sequelize.authenticate().then(() => {
        console.log('DB connection successfull')
    })
    console.log(`Server started successfuly at port ${PORT}`); 
})