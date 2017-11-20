 //This is peters simple code for this RPS API problem

 const rps=['rock', 'scissors', 'paper']
 const loss = ['paperscissors', 'rockpaper', 'paperscissors']
 const rpsChoice = () => [Math.floor(Math.random() * 3)]

 const rpsResult = (user, ai) =>{
     const userAi = user + ai
     if(user === ai){
         return 'tie'
     } else if (loss.includes(userAi)){
         return 'loss'
     } else{
         return 'win'
     }
 }
 app.get('/:userChoice', (req, res) => {
    if(!rps.includes(req.params.userChoice)){
      res.status(404)
      res.send('wrong')
    }
     let ai = aiChoice()
     let result = rpsResult(req.params.userChoice, ai)
     let response = {
         user: req.params.userChoice,
         ai: ai,
         result: result
     }
     res.send(JSON.stringify(response))
})

//Peter's code ends 
/*
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 8000

app.use(morgan('dev'))

app.get('/', (req, res) => {
    req.send(req.url)
    res.send('<h1>Enter Rock, Paper, Scissors</h1>')
})



app.get('/RPS', (req, res) => {
    var options = ['rock', 'paper', 'scissors']
    var computer = options[Math.floor(Math.random() * options.length)];
    var result;
    if (req.params.RPS === 'rock') {
        if (computer === "paper") {
            result = 'loss'
        } else if (computer === "scissors") {
            result = 'win'
        } else {
            result = 'draw'
        }
        res.send(`{user: rock ; computer: ${computer} ; result:${result}  }`)
    } else if (req.params.RPS === 'scissors') {
        if (computer === "rock") {
            result = 'loss'
        } else if (computer === "paper") {
            result = 'win'
        } else {
            result = 'draw'
        }
        res.send(`{user: scissor ; computer: ${computer} ; result:${result}  }`)
    } else if (req.params.RPS === 'paper') {
        if (computer === "scissors") {
            result = 'loss'
        } else if (computer === "rock") {
            result = 'win'
        } else {
            result = 'draw'
        }
        res.send(`{user: paper ; computer: ${computer} ; result:${result}  }`)
    } else {

        res.redirect('/')

    }
})
 */ 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})