const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const kontaktMailer = require('./kontaktMailer')

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.post('/api/contact', (req, res) => {
    kontaktMailer(req.body).then(() => {
      res.send('Ihre Mail wurde verschickt, vielen Dank für Ihre Zeit.')
    }).catch((error) => {
      console.log('failed', error)
      res.send('Beim Versenden der E-Mail ist ein Problem aufgetreten. Wenden Sie sich an Ihren Administrator.')
    })
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Server ready on http://localhost:3000')
  })
})