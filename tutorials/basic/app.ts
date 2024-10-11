import express from "express";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import filmsRouter from "./routes/films";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);
app.use("/films",filmsRouter);

/* Middleware to count the number of GET requests */
let requestCount = 0;
app.use((req, _res, next) => {
  if (req.method === "GET") {
    requestCount++;
    console.log(`GET counter : ${requestCount}`);
  }
  next();
});

app.use

export default app;
