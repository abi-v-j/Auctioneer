const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const argon2 = require('argon2')
const { createServer } = require('http')
const { Server } = require('socket.io')

const { connect, Schema, model } = require('mongoose')

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db =
  'mongodb+srv://auction:auction123@cluster0.fcdohik.mongodb.net/db_auction'

const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
})

httpServer.listen(port, async () => {
  console.log('server is Running')
  try {
    await connect(db)
    console.log('DB connection established')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
})

const districtSchemaStructure = new Schema({
  name: {
    type: String,
    required: true,
  },
})

const District = model('districtSchema', districtSchemaStructure)

// Create Operation
app.post('/district', async (req, res) => {
  try {
    const { district } = req.body
    let districtObj = await District.findOne({ district })

    if (districtObj) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'District already exists' }] })
    }

    districtObj = new District({
      district,
    })

    await districtObj.save()

    res.json({ message: 'District inserted successfully' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

// Read Operation
app.get('/districts', async (req, res) => {
  try {
    const districts = await District.find()
    res.json(districts)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// Update Operation
app.put('/districts/:id', async (req, res) => {
  try {
    const { name } = req.body
    const updatedDistrict = await District.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    )
    res.json(updatedDistrict)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// Delete Operation
app.delete('/districts/:id', async (req, res) => {
  try {
    await District.findByIdAndDelete(req.params.id)
    res.json({ msg: 'District removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

const placeSchemaStructure = new Schema({
  name: {
    type: String,
    required: true,
  },
  districtId: {
    type: Schema.Types.ObjectId,
    ref: 'districtSchema',
    required: true,
  },
})

const Place = model('placeSchema', placeSchemaStructure)

// Create Operation
app.post('/place', async (req, res) => {
  try {
    const { place, districtId } = req.body

    const placeObj = new place({
      place,
      districtId,
    })

    await placeObj.save()

    res.json({ message: 'Place inserted successfully' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

// Read Operation
app.get('/place', async (req, res) => {
  try {
    const place = await Place.find()
    res.json(place)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// Update Operation
app.put('/place/:id', async (req, res) => {
  try {
    const { place, districtId } = req.body
    const placeObj = await Place.findByIdAndUpdate(
      req.params.id,
      { place, districtId },
      { new: true }
    )
    res.json(placeObj)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// Delete Operation
app.delete('/place/:id', async (req, res) => {
  try {
    await Place.findByIdAndDelete(req.params.id)
    res.json({ msg: 'District removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

const userSchemaStucture = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    minlength: 10,
  },
  photo: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  place: {
    type: Schema.Types.ObjectId,
    ref: 'placeSchema',
    required: true,
  },
})
const User = model('userSchema', userSchemaStucture)

app.post('/user', async (req, res) => {
  try {
    const { name, email, password, phone, place, photo } = req.body
    let userObj = await User.findOne({ email })

    if (userObj) {
      return res.status(400).json({ error: [{ msg: 'User already exists' }] })
    }

    userObj = new User({
      name,
      email,
      password,
      phone,
      place,
      photo,
    })

    const salt = 12
    userObj.password = await argon2.hash(password, salt)

    await userObj.save()
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
  //see if user already exists
})

app.get('/user/:id', async (req, res) => {
  const userId = req.params.id
  let user = await User.findById(userId)
  res.send(user).status(200)
})

io.on('connection', (socket) => {
  socket.on('sample', ({ msg },callback) => {
    console.log(msg)
    callback({
        status: "ok"
      });
  })
})
