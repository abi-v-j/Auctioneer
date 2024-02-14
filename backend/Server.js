const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const argon2 = require('argon2')
const { createServer } = require('http')
const { Server } = require('socket.io')
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const { connect, Schema, model } = require('mongoose')

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))

const db =
   'mongodb+srv://auctioneer:auctioneer%40123@cluster0.4teukan.mongodb.net/dbAuctioneer'

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

io.on('connection', (socket) => {
   socket.on('sample', ({ msg }, callback) => {
      console.log(msg)
      callback({
         status: 'ok',
      })
   })
})

const PATH = './public/images'
const upload = multer({
   storage: multer.diskStorage({
      destination: PATH,
      filename: function (req, file, cb) {
         let origialname = file.originalname
         let ext = origialname.split('.').pop()
         let filename = origialname.split('.').slice(0, -1).join('.')
         cb(null, filename + '.' + ext)
      },
   }),
})

//Admin Schema

const adminSchemaStucture = new mongoose.Schema({
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
      minlength: 6,
   },
})

const Admin = mongoose.model('adminSchema', adminSchemaStucture)

// Admin Insert

app.post('/Admin', async (req, res) => {
   const { name, email, password } = req.body
   try {
      // let admin = await Admin.findOne({ email })

      // if (admin) {
      //     return res
      //         .status(400)
      //         .json({ errors: [{ msg: 'Admin already exists' }] })
      // }

      let admin = new Admin({
         name,
         email,
         password,
      })

      await admin.save()

      res.json({ message: 'Admin inserted successfully' })
   } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
   }
})

// select Admin

app.get('/Admin', async (req, res) => {
   const admin = await Admin.find()
   res.send({ admin })
})

//Delete Admin

app.delete('/Admin/:id', async (req, res) => {
   try {
      const Id = req.params.id
      console.log(Id)

      const deletedAdmin = await Admin.findByIdAndDelete(Id)

      if (!deletedAdmin) {
         return res.status(404).json({ message: 'Admin not found' })
      }

      res.json({ message: 'Admin deleted successfully', deletedAdmin })
   } catch (err) {
      console.error('Error deleting Admin:', err)
      res.status(500).json({ message: 'Internal server error' })
   }
})

//Admin update

app.put('/updateAdmin/:id', async (req, res) => {
   const id = req.params.id
   try {
      const { name, email, password } = req.body
      const updatedAdmin = await Admin.findByIdAndUpdate(
         id,
         { name, email, password },
         { new: true }
      )
      res.json(updatedAdmin)
   } catch (err) {
      console.error(err.message)
      res.status(500).send('server error')
   }
})

//User Schema

const userSchemastructure = new mongoose.Schema({
   name: {
      type: String,
      require: true,
   },
   email: {
      type: String,
      require: true,
   },
   password: {
      type: String,
      require: true,
   },
   photo: {
      type: String,
      require: true,
   },
   contact: {
      type: String,
      require: true,
   },
   proof: {
      type: String,
      require: true,
   },
   status: {
      type: String,
      require: true,
   },
   placeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'districtSchema',
      required: true,
   },
})
// Insert User
const User = mongoose.model('userSchema', userSchemastructure)

app.post(
   '/User',
   upload.fields([
      { name: 'Photo', maxCount: 1 },
      { name: 'Proof', maxCount: 1 },
   ]),
   async (req, res) => {
      const { Name, Email, Password, Contact, Place } = req.body
      try {
         // let admin = await User.findOne({ email })

         // if (user) {
         //     return res
         //         .status(400)
         //         .json({ errors: [{ msg: 'User already exists' }] })
         // }
         // if (!req.files || !req.files['photo'] || !req.files['proof']) {
         //    return res.status(400).json({
         //       errors: [{ msg: 'Photo and proof files are required' }],
         //    })
         // }

         var fileValue = JSON.parse(JSON.stringify(req.files))
         var profileimgsrc = `http://127.0.0.1:${port}/images/${fileValue.Photo[0].filename}`
         var proofimgsrc = `http://127.0.0.1:${port}/images/${fileValue.Proof[0].filename}`

         let user = new User({
            name: Name,
            email: Email,
            password: Password,
            photo: profileimgsrc,
            contact: Contact,
            proof: proofimgsrc,
            placeId: Place,
         })

         await user.save()

         res.json({ message: 'user inserted successfully' })
      } catch (err) {
         console.error(err.message)
         res.status(500).send('Server error')
      }
   }
)

// select User

app.get('/User', async (req, res) => {
   const user = await User.find()
   res.send({ user })
})

//Delete User

app.delete('/User/:id', async (req, res) => {
   try {
      const Id = req.params.id
      console.log(Id)

      const deletedUser = await User.findByIdAndDelete(Id)

      if (!deletedUser) {
         return res.status(404).json({ message: 'User not found' })
      }

      res.json({ message: 'User deleted successfully', deletedUser })
   } catch (err) {
      console.error('Error deleting User:', err)
      res.status(500).json({ message: 'Internal server error' })
   }
})

//User update

app.put('/updateUser/:id', async (req, res) => {
   const id = req.params.id
   try {
      const { name, email, password } = req.body
      const updatedUser = await User.findByIdAndUpdate(
         id,
         {
            name,
            email,
            password,
            photo,
            contact,
            proof,
         },
         { new: true }
      )
      res.json(updatedUser)
   } catch (err) {
      console.error(err.message)
      res.status(500).send('server error')
   }
})

//Dealer Schema

const dealerSchemastructure = new mongoose.Schema({
   Name: {
      type: String,
      require: true,
   },
   Email: {
      type: String,
      require: true,
   },
   Password: {
      type: String,
      require: true,
   },
   Contact: {
      type: String,
      require: true,
   },
   proofimgsrc: {
      type: String,
      require: true,
   },
   profileimgsrc: {
      type: String,
      require: true,
   },
   status: {
      type: String,
   },
})

//Insert Dealer

const Dealer = mongoose.model('dealerSchema', dealerSchemastructure)

app.post('/Dealer',
upload.fields([
   { name: 'Photo', maxCount: 1 },
   { name: 'Proof', maxCount: 1 },
]), async (req, res) => {
   const { Name, Email, Password, Contact } = req.body
   try {
      // let dealer = await Dealer.findOne({ email })

      // if (dealer) {
      //     return res
      //         .status(400)
      //         .json({ errors: [{ msg: 'dealer already exists' }] })
      // }

      var fileValue = JSON.parse(JSON.stringify(req.files))
      var profileimgsrc = `http://127.0.0.1:${port}/images/${fileValue.Photo[0].filename}`
      var proofimgsrc = `http://127.0.0.1:${port}/images/${fileValue.Proof[0].filename}`

      let dealer = new Dealer({
         Name,
         Email,
         Password,
         profileimgsrc,
         Contact,
         proofimgsrc,
      })

      await dealer.save()

      res.json({ message: 'dealer inserted successfully' })
   } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
   }
})

// select Dealer

app.get('/Dealer', async (req, res) => {
   const dealer = await Dealer.find()
   res.send({ dealer })
})

//Delete Dealer

app.delete('/Dealer/:id', async (req, res) => {
   try {
      const Id = req.params.id
      console.log(Id)

      const deletedDealer = await Dealer.findByIdAndDelete(Id)

      if (!deletedDealer) {
         return res.status(404).json({ message: 'Dealer not found' })
      }

      res.json({ message: 'Dealer deleted successfully', deletedDealer })
   } catch (err) {
      console.error('Error deleting Dealer:', err)
      res.status(500).json({ message: 'Internal server error' })
   }
})

//Dealer update

app.put('/updateDealer/:id', async (req, res) => {
   const id = req.params.id
   try {
      const { name, email, password } = req.body
      const updatedDealer = await Dealer.findByIdAndUpdate(
         id,
         {
            name,
            email,
            password,
            photo,
            contact,
            proof,
         },
         { new: true }
      )
      res.json(updatedDealer)
   } catch (err) {
      console.error(err.message)
      res.status(500).send('server error')
   }
})

//Lot Schema

const lotSchemastructure = new mongoose.Schema({
   name: {
      type: String,
      require: true,
   },
   price: {
      type: String,
      require: true,
   },
   minprice: {
      type: String,
      require: true,
   },
   antiqueimgsrc: {
      type: String,
      require: true,
   },
   quantity: {
      type: String,
      require: true,
   },
   datetime: {
      type: String,
      require: true,
   },
})
//Insert lot

const Lot = mongoose.model('lotSchema', lotSchemastructure)

app.post('/Lot',
upload.fields([
   { name: 'antique', maxCount: 1 },
]), async (req, res) => {

   var fileValue = JSON.parse(JSON.stringify(req.files))
   var antiqueimgsrc = `http://127.0.0.1:${port}/images/${fileValue.antique[0].filename}`

   const { name, minprice, quantity, datetime } = req.body
   try {
      let lot = new Lot({
         name,
         minprice,
         antiqueimgsrc,
         quantity,
         datetime,
      })

      await lot.save()

      res.json({ message: 'lot inserted successfully' })
   } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
   }
})
// select Lot

app.get('/Lot', async (req, res) => {
   const lot = await Lot.find()
   res.send({ lot })
})

//Lot update

app.put('/updateLot/:id', async (req, res) => {
   const id = req.params.id
   try {
      const { name, price, minprice, antique, quantity, datetime } = req.body
      const updatedLot = await Lot.findByIdAndUpdate(
         id,
         {
            name,
            price,
            minprice,
            antique,
            quantity,
            datetime,
         },
         { new: true }
      )
      res.json(updatedLot)
   } catch (err) {
      console.error(err.message)
      res.status(500).send('server error')
   }
})


//Lot update

app.put('/acceptLot/:id', async (req, res) => {
   const id = req.params.id
   try {
      const { name, price, minprice, antique, quantity, datetime } = req.body
      const updatedLot = await Lot.findByIdAndUpdate(
         id,
         {
            name,
            price,
            minprice,
            antique,
            quantity,
            datetime,
         },
         { new: true }
      )
      res.json(updatedLot)
   } catch (err) {
      console.error(err.message)
      res.status(500).send('server error')
   }
})

//AuctionHead Schema

const auctionheadSchemastructure = new mongoose.Schema({
   token: {
      type: String,
      require: true,
   },
   date: {
      type: String,
      require: true,
   },
   price: {
      type: String,
      require: true,
   },
})

//Insert AuctionHead

const Auctionhead = mongoose.model(
   'auctionheadSchema',
   auctionheadSchemastructure
)

app.post('/Auctionhead', async (req, res) => {
   const { token, date, price } = req.body
   try {
      let auctionhead = new Auctionhead({
         price,
         token,
         date,
      })

      await auctionhead.save()

      res.json({ message: 'auctionhead  inserted successfully' })
   } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
   }
})

// select Auction Head

app.get('/Auctionhead', async (req, res) => {
   const auctionhead = await Auctionhead.find()
   res.send({ auctionhead })
})

//Auction head update

app.put('/updateAuctionhead/:id', async (req, res) => {
   const id = req.params.id
   try {
      const { price, token, date } = req.body
      const updatedAuctionhead = await Auctionhead.findByIdAndUpdate(
         id,
         {
            price,
            token,
            date,
         },
         { new: true }
      )
      res.json(updatedAuctionhead)
   } catch (err) {
      console.error(err.message)
      res.status(500).send('server error')
   }
})

//Category Schema

const categorySchemastructure = new mongoose.Schema({
   name: {
      type: String,
      require: true,
   },
})

//Insert category

const Category = mongoose.model('categorySchema', categorySchemastructure)

app.post('/Category', async (req, res) => {
   const { name } = req.body
   try {
      let category = new Category({
         name,
      })

      await category.save()

      res.json({ message: 'category inserted successfully' })
   } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
   }
})
// select Category

app.get('/Category', async (req, res) => {
   const category = await Category.find()
   res.send({ category })
})

//Delete Category

app.delete('/Category/:id', async (req, res) => {
   try {
      const Id = req.params.id
      console.log(Id)

      const deletedCategory = await Category.findByIdAndDelete(Id)

      if (!deletedCategory) {
         return res.status(404).json({ message: 'Category not found' })
      }

      res.json({ message: 'Category deleted successfully', deletedCategory })
   } catch (err) {
      console.error('Error deleting Category:', err)
      res.status(500).json({ message: 'Internal server error' })
   }
})

//AuctionBody Schema

const auctionbodySchemastructure = new mongoose.Schema({
   lotauctionbodyprice: {
      type: String,
      require: true,
   },
})

//Insert Auction Body

const Auctionbody = mongoose.model(
   'auctionbodySchema',
   auctionbodySchemastructure
)
app.post('/Auctionbody', async (req, res) => {
   const { lotauctionbodyprice } = req.body
   try {
      let auctionbody = new Auctionbody({
         lotauctionbodyprice,
      })

      await auctionbody.save()

      res.json({ message: 'auctionbody inserted successfully' })
   } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
   }
})
// select Auction Body

app.get('/Auctionbody', async (req, res) => {
   const auctionbody = await Auctionbody.find()
   res.send({ auctionbody })
})

//Feedback Schema

const feedbackSchemastructure = new mongoose.Schema({
   content: {
      type: String,
      require: true,
   },
})

//Insert Feedback

const Feedback = mongoose.model('feedbackSchema', feedbackSchemastructure)
app.post('/Feedback', async (req, res) => {
   const { content } = req.body
   try {
      let feedback = new Feedback({
         content,
      })

      await feedback.save()

      res.json({ message: 'feedback inserted successfully' })
   } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
   }
})

// select Feedback

app.get('/Feedback', async (req, res) => {
   const feedback = await Feedback.find()
   res.send({ feedback })
})

//Feesback update

app.put('/updateFeedback/:id', async (req, res) => {
   const id = req.params.id
   try {
      const { content } = req.body
      const updatedFeedback = await Feedback.findByIdAndUpdate(
         id,
         {
            content,
         },
         { new: true }
      )
      res.json(updatedFeedback)
   } catch (err) {
      console.error(err.message)
      res.status(500).send('server error')
   }
})

//Complaint Schema

const complaintSchemastructure = new mongoose.Schema({
   content: {
      type: String,
      require: true,
   },
   replay: {
      type: String,
      require: true,
   },
})

//Insert Complaint

const Complaint = mongoose.model('complaintSchema', complaintSchemastructure)
app.post('/Complaint', async (req, res) => {
   const { content, replay } = req.body
   try {
      let complaint = new Complaint({
         content,
         replay,
      })

      await complaint.save()

      res.json({ message: 'complaint inserted successfully' })
   } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
   }
})

// select Complaint

app.get('/Complaint', async (req, res) => {
   const complaint = await Complaint.find()
   res.send({ complaint })
})

//Complaint update

app.put('/updateComplaint/:id', async (req, res) => {
   const id = req.params.id
   try {
      const { content, replay } = req.body
      const updatedComplaint = await Complaint.findByIdAndUpdate(
         id,
         {
            content,
            replay,
         },
         { new: true }
      )
      res.json(updatedComplaint)
   } catch (err) {
      console.error(err.message)
      res.status(500).send('server error')
   }
})

//State Schema

const stateSchemastructure = new mongoose.Schema({
   stateName: {
      type: String,
      require: true,
   },
})

//Insert State

const State = mongoose.model('stateSchema', stateSchemastructure)
app.post('/State', async (req, res) => {
   const { stateName } = req.body
   try {
      let state = new State({
         stateName,
      })

      await state.save()

      res.json({ message: 'state inserted successfully' })
   } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
   }
})
// select State

app.get('/State', async (req, res) => {
   const state = await State.find()
   res.send({ state })
})

//District Schema

const districtSchemastructure = new mongoose.Schema({
   districtName: {
      type: String,
      require: true,
   },
   stateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'stateSchema',
      required: true,
   },
})

//Insert District

const District = mongoose.model('districtSchema', districtSchemastructure)
app.post('/District', async (req, res) => {
   const { districtName, stateId } = req.body
   try {
      let district = new District({
         districtName,
         stateId,
      })

      await district.save()

      res.json({ message: 'district inserted successfully' })
   } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
   }
})

// select District

app.get('/District/:Id', async (req, res) => {
   const Id = req.params.Id
   const district = await District.find({ stateId: Id })
   res.send({ district })
})

//Place Schema

const placeSchemastructure = new mongoose.Schema({
   placeName: {
      type: String,
      require: true,
   },
   districtId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'districtSchema',
      required: true,
   },
})

//Insert place

const Place = mongoose.model('placeSchema', placeSchemastructure)
app.post('/Place', async (req, res) => {
   const { placeName, districtId } = req.body
   try {
      let place = new Place({
         placeName,
         districtId,
      })

      await place.save()

      res.json({ message: 'place inserted successfully' })
   } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
   }
})

// select Place

app.get('/Place', async (req, res) => {
   const place = await Place.find()
   res.send({ place })
})

// select Place

app.get('/Place/:Id', async (req, res) => {
   const Id = req.params.Id
   const place = await Place.find({ districtId: Id })
   res.send({ place })
})

//Gallery Schema

const gallerySchemastructure = new mongoose.Schema({
   image: {
      type: String,
      require: true,
   },
})

//Insert gallery

const Gallery = mongoose.model('gallerySchema', gallerySchemastructure)
app.post('/Gallery', async (req, res) => {
   const { image } = req.body
   try {
      let gallery = new Gallery({
         image,
      })

      await gallery.save()

      res.json({ message: 'gallery inserted successfully' })
   } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
   }
})

// select Gallery

app.get('/Gallery', async (req, res) => {
   const gallery = await Gallery.find()
   res.send({ gallery })
})

app.post('/Login', async (req, res) => {
   try {
      const { email, password } = req.body
      const user = await User.findOne({ email })
      const dealer = await Dealer.findOne({ Email:email })
      const admin = await Admin.findOne({ email })

      if (!user && !dealer && !admin) {
         return res.status(400).json({ error: 'Invalid credential' })
      }
      if (user) {
         res.send({
            id: user._id,
            login: 'user',
         })
      } else if (dealer) {
         res.send({
            id: dealer._id,
            login: 'dealer',
         })
      } else if (admin) {
         res.send({
            id: admin._id,
            login: 'admin',
         })
      }
      else{
     console.log("hey ");
      }
   } catch (error) {}
})
