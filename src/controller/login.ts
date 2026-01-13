import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  const SECRET_KEY = process.env.JWT_SECRET;
  let jwtToken;

  try {
    const { email, password } = req.body;
    const currentDate: Date = new Date();
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    const checkPass = await bcrypt.compare(password, user?.password);
    if (checkPass) {
      if (SECRET_KEY) {
        jwtToken = jwt.sign({ email: user.email, id: user.id }, SECRET_KEY, {
          expiresIn: "1d",
        });
      }
      console.log(
        `${user.name} Logged in Successfully ${currentDate.toString()}`
      );

      return res
        .status(200)
        .json({ message: " User Found", success: true, jwtToken });
    } else {
      return res
        .status(404)
        .json({ message: "Password incorrect", success: false });
    }
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user) {
      return res.status(409).json({ message: " User Already Exist" });
    } else {
      const hashed = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          email: email,
          name: name,
          password: hashed,
        },
      });
      console.log("Signup Success");
      return res.status(200).json({ message: " signup done ", success: true });
    }
  } catch (err) {
    res.status(500).json({ message: "internal server error", success: false });
  }
};
