import express from "express";
import bodyParser from "body-parser";
import recommendationsRouter from "./routes/recommendations";
import usersRouter from "./routes/users";
import { connectDB } from "./utils/database";
import cors from "cors";
const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/recommendations", recommendationsRouter);
app.use("/users", usersRouter);

app.options("*", cors());
const allowedOrigins = [
  "http://localhost:3000",
  "https://8783-193-201-105-30.ngrok-free.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the incoming origin is in the allowed list or if there's no origin (for same-origin requests)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"], // Specify allowed methods
  })
);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

export default app;
