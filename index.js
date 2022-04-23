import express from 'express';
import morgan from "morgan";
import routes from './routes/index.js';

const app = express();

// morgan logger
// https://expressjs.com/en/resources/middleware/morgan.html
app.use(morgan("dev")); 
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use((req,res) => {
  res.status(404).send("Route not found")
});


app.use((err,req,res,next) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});

app.listen(3000, () => {
  console.log("app listening on port 3000")
});
