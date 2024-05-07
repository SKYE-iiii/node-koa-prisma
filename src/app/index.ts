/*
 * @Description:
 * @Author: zyj
 * @Date: 2024-05-07 16:03:03
 * @LastEditors: zyj
 * @LastEditTime: 2024-05-07 16:03:04
 * @FilePath: \node-koa-prisma\src\app\index.ts
 */

const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");

app.use(bodyParser());

module.exports = app;
