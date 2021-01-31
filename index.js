const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.json())

app.get('/koders', (request, response) => {

    const kodemiaData = fs.readFyleSync('kodemia.json', 'utf8')
    const jsonData = JSON.parse(kodemiaData)

    response.json({
        success: true,
        message: 'Koders Api',
        data:jsonData.koders

    })
})

app.get('koders/:id', (request, response) =>{
    let { id } = request.params
    id = parseInt(id)
    
    const kodemiaDataString = fs.readFileSync('kodemia.jason', 'utf8')
    const kodemiaData = JSON.parse(kodemiaDataString)

    const koderFound = kodemiaData.koders.find( koder => koder.id === id )



    response.json({
            success: true,
            data: koderFound
        })
})



app.post('/koders',(request, response) => {

    const kodemiaDataString = fs.readFileSync('kodemia.json', 'utf8')
    const kodemiaData = JSON.parse(kodemiaDataString)

    const newID = kodemiaData.koders.lenght + 1
    const { name, age} = request.body

    const newKoder = {
        id: newID,
        name: name,
        age: age
    }

    kodemiaData.koders.push(newKoder)

    const newKoderDataString = JSON.stringify(kodemiaData)

    fs.writeFileSync('kodemia.json', newKoderDataString, 'utf8')

/* const newLine = '\n${request.body.name},${request.body.age{}'
    fs.appendFileSync('koders.txt', newLine, 'utf8') */

    response.json( {
        success: true,
        message: 'Koder agregado'
    })

})

app.listen(8080,() => {
    console.log('server listening on port 8080')
})
