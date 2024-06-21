"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsoa_1 = require("tsoa");
const Icecream_1 = require("../models/Icecream");
const Topping_1 = require("../models/Topping");
let IcecreamController = class IcecreamController {
    async create(body) {
        const data = new Icecream_1.IcecreamModel({
            name: body.name,
        });
        try {
            await data.save();
            return "OK";
        }
        catch (error) {
            return JSON.stringify(error);
        }
    }
    async all() {
        try {
            const data = await Icecream_1.IcecreamModel.find();
            return data;
        }
        catch (error) {
            return {
                error: error.message,
            };
        }
    }
    async update(body) {
        try {
            const result = await Icecream_1.IcecreamModel.findByIdAndUpdate(body.id, { name: body.name });
            return { result: result };
        }
        catch (error) {
            return {
                error: error.message,
            };
        }
    }
    async delete(id) {
        try {
            const data = await Icecream_1.IcecreamModel.findByIdAndDelete(id);
            return { data: data };
        }
        catch (error) {
            return {
                error: error.message,
            };
        }
    }
    async allToppings() {
        try {
            const data = await Topping_1.ToppingModel.find();
            return data;
        }
        catch (error) {
            return {
                error: error.message,
            };
        }
    }
    async fields() {
        try {
            const data = await Icecream_1.IcecreamModel.find().select("name toppingId -_id");
            return data;
        }
        catch (error) {
            return {
                error: error.message,
            };
        }
    }
    async query() {
        try {
            const data = await Icecream_1.IcecreamModel.find().select("name toppingId -_id").populate("toppingId", "name -_id");
            return data;
        }
        catch (error) {
            return {
                error: error.message,
            };
        }
    }
};
__decorate([
    (0, tsoa_1.Post)("/create"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IcecreamController.prototype, "create", null);
__decorate([
    (0, tsoa_1.Get)("/getAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IcecreamController.prototype, "all", null);
__decorate([
    (0, tsoa_1.Patch)("/update"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IcecreamController.prototype, "update", null);
__decorate([
    (0, tsoa_1.Delete)("/delete/:id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IcecreamController.prototype, "delete", null);
__decorate([
    (0, tsoa_1.Get)("/getToppings"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IcecreamController.prototype, "allToppings", null);
__decorate([
    (0, tsoa_1.Get)("/fields"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IcecreamController.prototype, "fields", null);
__decorate([
    (0, tsoa_1.Get)("/query"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IcecreamController.prototype, "query", null);
IcecreamController = __decorate([
    (0, tsoa_1.Route)("api/icecream")
], IcecreamController);
exports.default = IcecreamController;
