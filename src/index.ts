/*
 * @Description:
 * @Author: zyj
 * @Date: 2024-05-06 15:52:38
 * @LastEditors: zyj
 * @LastEditTime: 2024-05-07 15:48:44
 * @FilePath: \node-koa-prisma\src\index.ts
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async () => {
  /** 创建单个用户 */

  // const result = await prisma.user.create({
  //   data: {
  //     name: "1",
  //     email: "1@qq.com",
  //   },
  // });

  /** 创建多个用户 */

  // const result = await prisma.user.createMany({
  //   data: [
  //     { name: "最新", email: "2@qq.com" },
  //     { name: "阿达", email: "3@qq.com" },
  //   ],
  // });

  /** 创建用户的同时创建文章  */

  const result = await prisma.user.create({
    data: {
      name: "安安",
      email: "4@qq.com",
      posts: {
        create: {
          title: "安安测试",
          content: "安安测试内容",
        },
      },
    },
  });
  console.log(result, "createUser");
};

async function main() {
  // await createUser();
  // await updateUser();
  await queryUser();
}

/** 查询用户 */
const queryUser = async () => {
  /** 查询所有用户 */

  // const result = await prisma.user.findMany();

  /** 查询指定用户及嵌套查询当前用户的文章  */

  // const result = await prisma.user.findUnique({
  //   where: { email: "4@qq.com" }, // where 类似精准查询查询语句根据必填项进行查询
  //   include: { posts: true },
  // });

  /** 查询用户时隐藏关键信息 */

  // const result = await prisma.user.findMany({
  //   /** 即只返回id和name */
  //   select: {
  //     id: true,
  //     name: true,
  //   },
  // });

  /**  查询部分符合条件的数据 - 模糊查询 */
  // const result = await prisma.user.findMany({
  //   where: {
  //     name: {
  //       // contains: "安安", // 包含
  //       startsWith: "1", // 开头
  //     },
  //   },
  // });

  /** 分页查询 skip = pageSize * take */
  const result = await prisma.user.findMany({
    skip: 1, // 跳过前几条
    take: 1, // 取几条
  });
  console.log(result);
};

/** 更新 */
const updateUser = async () => {
  const res = await prisma.user.update({
    where: { id: 1 },
    data: { name: "测试" },
  });
  console.log(res, "update");
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
