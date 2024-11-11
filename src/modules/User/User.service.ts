import { Request } from "express";
import * as bcrypt from "bcrypt";
import prisma from "../../shared/prisma";

const createUserIntoDB = async (req: Request) => {
  const hashedPassword: string = await bcrypt.hash(req.body.password, 12);
  const userData = {
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    const createdUserData = await transactionClient.user.create({
      data: userData,
    });
    return createdUserData;
  });

  return result;
};

export const UserServices = {
  createUserIntoDB
}
