// const http = require('http') // this is import syntax
// const PORT = 3001 // hardcoded port to listen for request

const express = require('express') // this is importing the express
const app = express() // ig this is intializing the express

app.use(express.json()) 

let notes = [
    {
      id: "1",
      content: "HTML is easy",
      important: true
    },
    {
      id: "2", 
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: "3",
      content: "GET and POST are the most important methods of HTTP protocol", 
      important: true
    }
  ] // this will stay the same
  
// this is basically not having  any endpoints
    // const app = http.createServer((request, response) => {
    //   response.writeHead(200, { 'Content-Type': 'application/json' })
    //   response.end(JSON.stringify(notes))
    // })  // this will probably listen and write header and respone back to browser

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    // Handle ANY id value
    const id = request.params.id
    const note = notes.find(note => note.id === id)
    if (note) {
        response.json(note)           // Found it - send the note
      } else {
        response.status(404).end()    // Not found - send 404 error
    }
})
app.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id
    notes = notes.filter(note => note.id !== id)
    response.status(204).end()
})

const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => Number(n.id)))
      : 0
    return String(maxId + 1)
  }
  
  app.post('/api/notes', (request, response) => {
    const body = request.body
  
    if (!body.content) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
  
    const note = {
      content: body.content,
      important: body.important || false,
      id: generateId(),
    }
  
    notes = notes.concat(note)
  
    response.json(note)
  })

  
const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// app.listen(PORT) // using the port to listen the http request
// console.log(`Server running on port ${PORT}`) // this is for our terminal ig


// const http = require('http')

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   res.end('Basic server works!')
// })

// server.listen(3001, () => {
//   console.log('Basic server running on port 3001')
// })