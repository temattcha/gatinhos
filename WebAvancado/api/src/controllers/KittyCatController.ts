import { Body, Post, Route } from "tsoa"
import { KittyCatModel } from "../models/kittyCat"
import { JsonObject } from "swagger-ui-express"

@Route("api/kittyCat")
export default class KittyCatController {
  @Post("/create")
  public async create(@Body() body: { name: string, color: string, age: number, weight: number, isFelv: boolean, species: string }): Promise<JsonObject> {
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
}
