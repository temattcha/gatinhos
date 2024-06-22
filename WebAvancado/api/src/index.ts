import { KittyCatModel } from './models/KittyCat';
import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import cors from "cors"

import userRoutes from "./routes/userRoutes"
import kittyCatRoutes from "./routes/kittyCatRoutes"

import swaggerUi from "swagger-ui-express"
import { connect } from "./service/database"

dotenv.config()

const app: Express = express()

const port = process.env.PORT
const databaseUrl = process.env.DATABASE_URL || ""

connect(databaseUrl)

const corsOptions = { 
  origin : ['http://localhost:3000'], 
} 
 
app.use(cors(corsOptions)) 
app.use(express.json())
app.use(express.static("public"))
app.use(
  "/swagger", // endereço de onde o swagger responde
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
)

app.use("/api/user", userRoutes)
app.use("/api/kittyCat", kittyCatRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server")
})

app.listen(port, () => {
  console.log(`Server Started at ${port}`)
})
