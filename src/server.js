import http from 'node:http' //o que for nativo do node deverá ter o 'node:'
import { json } from './util/json.js'

const database = []

const server = http.createServer(async(req, res) => {
    const {method, url} = req

    await json(req, res)
    console.log(req.body)
    if(method === 'GET' && url === "/users"){ //GET para ver os usuários na página
        return res.end(JSON.stringify(database))
    }
    console.log(method, url)
    if(method === 'POST' && url === "/users"){ //POST para cadastrar os usuários
        const {name, email} = req.body
        console.log(name, email)
        const user = {
            id:1,
            name: 'Name',
            email: 'email@email.com'
        }
        database.push(user)
        return res.end('Cadastro de usuários')
    }
})

server.listen(3333)