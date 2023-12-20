import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { fullName, userName, email, password, dateBirth } = req.body;
  try {
    if (req.params.role === "user") {
      const existingUserCount = await prisma.user.count({
        where: { email },
      });
      if (existingUserCount !== 0) {
        res.status(409).send("userAlreadyexist");
      }
      const salt = bcryptjs.genSaltSync(5);
      const hach = bcryptjs.hashSync(password, salt);
      let user = await prisma.user.create({
        data: {
          fullName,
          userName,
          email,
          password: hach,
          dateBirth,
        },
      });
      res.status(200).json("done");
    } else if (req.params.role === "creator") {
      const existingUserCount = await prisma.creator.count({
        where: { email },
      });
      console.log("ddddddd", existingUserCount);
      if (existingUserCount !== 0) {
        res.status(409).send("userAlreadyexist");
      }
      const salt = bcryptjs.genSaltSync(5);
      const hach = bcryptjs.hashSync(password, salt);
      let user = await prisma.creator.create({
        data: {
          fullName,
          userName,
          email,
          password: hach,
          dateBirth,
          bgImage: "",
          pfImage: "",
          status: false,
          bio: "",
          address: "",
        },
      });
      res.status(200).json("done");
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const signin = async (req: Request, res: Response): Promise<void> => {
  const { fullName, userName, email, dateBirth, id } = req.body;
  try {
    let user;
    if (req.params.role === "creator") {
      user = await prisma.creator.findMany({
        where: { email: req.body.email },
      });
    } else {
      user = await prisma.user.findMany({ where: { email: req.body.email } });
    }

    if (!user.length) {
      res.status(409).send("userdoesntexist");
    }

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user[0].password
    );

    if (!isPasswordCorrect) {
      res.status(409).send("password incorrect");
    }

    const token = jwt.sign({ id: user[0].id }, "jwtkey");

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .send({ fullName, userName, email, dateBirth, id });
  } catch (err) {
    console.error(err);
    res.status(500).send("error");
  }
};

export const signing = async (req: Request, res: Response) => {
  const fullName: string = req.params.fullName;
  const email: string = req.params.email;
  let User;

  try {
    if (req.params.role === "creator") {
      const user = await prisma.creator.count({
        where: { email: req.body.email },
      });
      if (!user) {
        const users = await prisma.creator.create({
          data: {
            fullName,
            userName: "",
            bgImage: "",
            pfImage: "",
            status: false,
            bio: "",
            dateBirth: "",
            email,
            password: "",
            address: "",
          },
        });
      }
    } else {
      const user = await prisma.user.count({
        where: { email: req.body.email },
      });
      if (!user) {
        const users = await prisma.user.create({
          data: {
            fullName,
            userName: "",
            email,
            password: "",
            dateBirth: "",
          },
        });
      }
    }
    if ((req.params.role = "creator")) {
      User = await prisma.creator.findMany({
        where: { email: req.body.email },
      });
    } else {
      User = await prisma.user.findMany({ where: { email: req.body.email } });
    }

    const token = jwt.sign({ id: User[0].id }, "jwtkey");
    const { password, ...other } = User[0];
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .send(other);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const logout = async (req: Request, res: Response) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("user has been loged out");
};
