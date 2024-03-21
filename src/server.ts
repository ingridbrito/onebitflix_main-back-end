import express from "express"

const app = express()

const PORT = process.env.PORT || 3000 
//cria-se a variável PORT e a partir dela, puxa a porta já definida nas variáveis de ambiente
//caso não exista, ele vai para a 3000

app.listen(PORT, () => {
    console.log(`Server started successfuly at port ${PORT}`); 
})