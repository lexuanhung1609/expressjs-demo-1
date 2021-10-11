import path from 'path';
import express from 'express';
import userRoutes from './routes/auth.js';
import { config } from 'dotenv';
config();

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// app.use(express.static(path.join(__dirname, 'assets')));

app.use(userRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Nodejs session',
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Path Not Found',
  });
});

app.listen(port, () => {
  console.log('Server is running at port 3000');
});
