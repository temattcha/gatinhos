import express, { Request, Response } from "express"
import KittyCatController from "../controllers/KittyCatController"

const router = express.Router()
const controller = new KittyCatController()

router.post("/create", async (req: Request, res: Response) => {
  const response = await controller.create(req.body)

  return res.status(200).send(response)
})

export default router
