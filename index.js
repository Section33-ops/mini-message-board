import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import messagesRouter from './routes/messageRoutes.js';

const app = express();
const port = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', messagesRouter);

app.listen(port, (error) => {
  if (error) {
    console.log(`An error occured: ${error}`);
  } else {
    console.log(`App is running on port ${port}`);
  }
});
