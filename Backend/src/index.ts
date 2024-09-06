import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success:true,
    message:"Server is up and running for 1Billiondollar!~!"
  })
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
