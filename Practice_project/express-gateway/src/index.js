"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = __importDefault(require("./routes/auth"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const portNum = process.env.PORT || 4000;
const CORS_ORIGIN = "http://localhost:5173"; //This may need adjusting for dev server.
app.use((0, cors_1.default)({
    origin: CORS_ORIGIN,
    credentials: true,
}));
app.use(express_1.default.json());
//Routes
app.use("/auth", auth_1.default);
app.get("/heart-beat", (__req, res) => {
    res.json({
        status: "ok",
        service: "express-gateway",
    });
});
app.listen(portNum, () => {
    console.log(`express-gateway running at :: ${portNum}`);
});
//# sourceMappingURL=index.js.map