/*
 * @Description:
 * @Author: zyj
 * @Date: 2024-05-07 16:02:35
 * @LastEditors: zyj
 * @LastEditTime: 2024-05-07 16:18:12
 * @FilePath: \node-koa-prisma\main.ts
 */

const APP = require("./src/app/index.ts");
const config = require("./src/app/config.ts");

APP.listen(config.APP_PORT, () => {
  console.log("server is running at http://localhost:3000");
});
