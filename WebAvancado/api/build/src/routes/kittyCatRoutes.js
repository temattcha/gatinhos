"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const KittyCatController_1 = __importDefault(require("../controllers/KittyCatController"));
const router = express_1.default.Router();
const controller = new KittyCatController_1.default();
router.post("/create", async (req, res) => {
    const response = await controller.create(req.body);
    return res.status(200).send(response);
});
exports.default = router;
