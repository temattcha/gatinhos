"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KittyCatModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const kittyCatSchema = new mongoose_1.default.Schema({
    name: {
        required: true,
        type: String,
    },
    color: {
        required: true,
        type: String,
    },
    age: {
        required: true,
        type: Number,
    },
    weight: {
        required: false,
        type: Number,
    },
    isFelv: {
        required: false,
        type: Boolean,
    },
    species: {
        required: true,
        type: String,
    }
});
exports.KittyCatModel = mongoose_1.default.model("KittyCat", kittyCatSchema);
