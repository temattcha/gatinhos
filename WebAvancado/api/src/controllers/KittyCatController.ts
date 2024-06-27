import { Body, Get, Patch, Delete, Post, Route } from "tsoa"
import { KittyCatModel } from "../models/KittyCat"
import { JsonObject } from "swagger-ui-express"

@Route("api/kittyCat")
export default class KittyCatController {
  @Post("/create")
  public async createCat(@Body() body: { name: string, color: string, age: number, weight: number, isFelv: boolean, species: string }): Promise<JsonObject> {
    const data = new KittyCatModel({
      name: body.name,
      color: body.color,
      age: body.age,
      weight: body.weight,
      isFelv: body.isFelv,
      species: body.species
    })

    try {
      return data.save()
    } catch (error) {
      return { error }
    }
  }

  @Get("/getAll")
  public async allCat(): Promise<JsonObject> {
    try {
      const data = await KittyCatModel.find()
      return data
    } catch (error: any) {
      return {
        error: error.message,
      }
    }
  }

  @Patch("/update")
  public async updateCat(@Body() body: { id: string; name: string }): Promise<JsonObject> {
    try {
      const result = await KittyCatModel.findByIdAndUpdate(body.id, { name: body.name })

      return { result: result }
    } catch (error: any) {
      return {
        error: error.message,
      }
    }
  }

  @Delete("/delete/:id")
  public async deleteCat(id: string): Promise<JsonObject> {
    try {
      const data = await KittyCatModel.findByIdAndDelete(id)
      return { data: data }
    } catch (error: any) {
      return {
        error: error.message,
      }
    }
  }
}
