const express = require('express');
const morgan = require('morgan')
const app = express()
const port = 8000
app.get('/', (req, res) => {
    res.send('<h1>Create and express server that works as a basic calculator API.</h1>')
  }) 
const ops = ['add','sub','mult','div']
const mathOpp = (operation, num1 ,num2) => {
    if(operation === 'add'){
        return num1 + num2
    } else if(operation === 'sub'){
        return num1 - num2
    } else if (operation === 'mult'){
        return num1 * num2
    } else if(operation === 'div'){ 
        return num1 / num2 
    }
} 
// routes the '/' URL path to produce a response of 'Hello World!'

app.get('/:operation/:num1/:num2' , (req,res) =>{
    
    let intOne = parseInt(req.params.num1)
    let intTwo = parseInt(req.params.num2)
    let operation = mathOpp(req.params.operation, intOne, intTwo)

    if (!ops.includes(req.params.operation)){
        res.send('Our API takes in a math function and manipulates two numbers. Do better')
    }
    if(!intOne  || !intTwo){
        res.send('Numbers Only')
    }


    let final = {
        num1: req.params.num1,
        num2: req.params.num2,
        result: operation

    }

    res.send(JSON.stringify(final))
})

app.listen(port,() => {
    console.log(`listening to ${port} `)
})