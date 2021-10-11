import express from 'express';
import userRoutes from './routes/auth.js';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
