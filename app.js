import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/auth.js';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import { UserDB, KeoBet, Team, Wallet, TransactionHistory } from './models/models_dbCollections.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
config();

const app = express();
const port = process.env.PORT;

mongoose.connect('mongodb://localhost:27017/bvn_anhHung');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('MongoDB - database bvn_anhHung - connected successfully');
  console.log('Trying to create collections and insert data to MongoDB...');
  console.log('Use POSTMAN: /newUserDB or /newKeoBet or /newTeam or /newWallet or /newTransactionHistory')
  // const wallet_1 = new Wallet({ user_id: '123', balance: 100 });
  // wallet_1.save();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'assets')));

app.use(userRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Path Not Found',
  });
});

app.listen(port, () => {
  console.log('Server is running at port 3000');
});
