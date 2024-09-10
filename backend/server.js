const { MongoClient, ServerApiVersion } = require('mongodb');
const { ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://anwarfarhan339:5vFpocRH5ZvXZjoX@cluster0.vt5hf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    const userCollection = client.db('database').collection('users');

    app.get('/user', async (req, res) => {
      const users = await userCollection.find().toArray();
      // console.log(users);
      res.send(users);
    });

    app.get('/currentUser/:email'), async (req, res) => {
      const email = req.params.user.email;
      const user = await userCollection.find({ email: email }).toArray();
      // console.log(user);
      console.log(req.body)
      console.log(email)
      res.send(user)
    }

    app.post('/register', async (req, res) => {
      const user = req.body;
      // console.log(user);
      const result = await userCollection.insertOne(user);
      res.send(result);
      // console.log(result);
    })
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}
}

  app.get('/', (req, res) => {
    console.log("Hello From Twitter");
    res.send(`Hello World! I am a server`);
});

app.listen(port, async () => {
    try {
        await run();
        console.log(`Server running on http://localhost:${port}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
});
