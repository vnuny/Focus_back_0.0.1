"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = require("ioredis");
require("dotenv/config");
const redisUrl = process.env.REDIS_URL;
if (!redisUrl)
    throw new Error("REDIS_URL is not defined");
console.log(redisUrl);
const Redis = new ioredis_1.Redis(`${redisUrl}/0`, {
    lazyConnect: true
});
exports.default = Redis;
