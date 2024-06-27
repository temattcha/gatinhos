import express, { Request, Response } from "express"
import KittyCatController from "../controllers/KittyCatController"

const router = express.Router()
const controller = new KittyCatController()

router.post("/create", async (req: Request, res: Response) => {
  const response = await controller.createCat(req.body)

  return res.status(200).send(response)
})

router.get("/getAll", async (req: Request, res: Response) => {
  const response = await controller.allCat()

  return res.status(response.error ? 400 : 200).send(response)
})

router.patch("/update", async (req: Request, res: Response) => {
  const response = await controller.updateCat(req.body)

  return res.status(response.error ? 400 : 200).send(response)
})

router.delete("/delete/:id", async (req: Request, res: Response) => {
  const response = await controller.deleteCat(req.params.id)

  return res.status(response.error ? 400 : 200).send(response)
})

export default router
