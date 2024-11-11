import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { UserServices } from "./User.service";

const createUser = catchAsync(async (req, res) => {
  const { id, name, email, createdAt, updatedAt } : any = 
  await UserServices.createUserIntoDB(req)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User registered  successfuly!",
    data: {
      id,
      name,
      email,
      createdAt,
      updatedAt,
    },
  });
})

export const UserController = {
  createUser
}