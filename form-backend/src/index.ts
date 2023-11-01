import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import formRouter from './routes/FormRoutes'; 
import colorRouter from './routes/ColorRoutes'; 


const app = express();
app.use(cors());
const port = 3000;

app.use(morgan('dev'));
app.use(express.json());

app.use('/form', formRouter);
app.use('/color', colorRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
