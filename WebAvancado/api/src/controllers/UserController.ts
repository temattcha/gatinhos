import { Body, Get, Patch, Delete, Post, Route } from "tsoa"
import { UserModel } from "../models/User"
import { JsonObject } from "swagger-ui-express"

@Route("api/user")
export default class UserController {
  @Post("/create")
  public async create(@Body() body: { name: string; email: string; password: string }): Promise<string> {
    const data = new UserModel({
      name: body.name,
      email: body.email,
      password: body.password,
    })

    try {
      await data.save()
      return "OK"
    } catch (error) {
      return JSON.stringify(error)
    }
  }

  @Get("/getAll")
  public async all(): Promise<JsonObject> {
    try {
      const data = await UserModel.find()
      return data
    } catch (error: any) {
      return {
        error: error.message,
      }
    }
  }

  @Patch("/update")
  public async update(@Body() body: { id: string; name: string }): Promise<JsonObject> {
    try {
      const result = await UserModel.findByIdAndUpdate(body.id, { name: body.name })

      return { result: result }
    } catch (error: any) {
      return {
        error: error.message,
      }
    }
  }

  @Delete("/delete/:id")
  public async delete(id: string): Promise<JsonObject> {
    try {
      const data = await UserModel.findByIdAndDelete(id)
      return { data: data }
    } catch (error: any) {
      return {
        error: error.message,
      }
    }
  }
}
