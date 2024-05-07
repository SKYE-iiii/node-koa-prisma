/*
 * @Description:
 * @Author: zyj
 * @Date: 2024-05-07 16:11:24
 * @LastEditors: zyj
 * @LastEditTime: 2024-05-07 16:12:36
 * @FilePath: \node-koa-prisma\src\app\config.ts
 */
const dotenv = require("dotenv");

dotenv.config();

const { APP_PORT } = process.env;

module.exports = {
  APP_PORT,
};
