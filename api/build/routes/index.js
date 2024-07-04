"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.send('Hello World');
});
router.get('/health', (req, res, next) => {
    res.sendStatus(200);
});
exports.default = router;
