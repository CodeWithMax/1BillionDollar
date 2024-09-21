import express, { Request, Response } from 'express';

const app = express();
const port = 5500;

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success:true,
    message:"Server is up and running for land"
  })
});

app.get('/public', (req: Request, res: Response) => {
  res.status(200).json({
    success:true,
    message:"messsage from public page"
  })
});

app.listen(port, () => {
  console.log(`Server is running at${port}`); 
});

