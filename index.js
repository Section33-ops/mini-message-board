import express from 'express';

const app = express();
const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(`An error occured: ${error}`);
  } else {
    console.log(`App is running on port ${port}`);
  }
});
