import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();


export const signup = async (req: Request, res: Response): Promise<void> => {

  const { fullName, userName, email, password, dateBirth } = req.body;
  let table;
  try {
    if (req.params.role === "creator") {
      const existingUserCount = await prisma.creator.count({
        where: { email },
      });
      if (existingUserCount > 0) {
        console.log(existingUserCount)
        res.status(409).send("userAlreadyexist");
      }
    } else if (req.params.role === "user") {
      const existingUserCount = await prisma.user.count({
        where: { email },
      });
      if (existingUserCount > 0) {
        console.log(existingUserCount)
        res.status(409).send("userAlreadyexist");
      }
    }

    const salt = bcryptjs.genSaltSync(5);
    const hach = bcryptjs.hashSync(password, salt);
    let user
    if (req.body.role === 'user') {
      user = await prisma.user.create({
        data: {
          fullName,
          userName,
          email,
          password: hach,
          dateBirth,
        },
      }); 
      console.log(user)
    } else {
      user = await prisma.creator.create({
        data: {
          fullName,
          userName,
          email,
          password: hach,
          dateBirth,
          bgImage: '',
          pfImage: '',
          status: false,
          bio: '',
          address: ''
        },
      });
      console.log(user)
    }

    res.status(200).json("done");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const signin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fullName, userName, email, password, dateBirth, role } = req.body;

    if (req.params.role === "creator") {
      const existingUserCount = await prisma.creator.count({
        where: { email },
      });
      if (existingUserCount === 0) {
        res.status(409).send("usernotexist");
      }
    } else if (req.params.role === "user") {
      const existingUserCount = await prisma.user.count({
        where: { email },
      });
      if (existingUserCount === 0) {
        res.status(409).send("usernotexist");
      }
    }

    const salt = bcryptjs.genSaltSync(5);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const newUser = await prisma.user.create({
      data: {
        fullName,
        userName,
        email,
        password: hashedPassword,
        dateBirth,
      },
    });

    res.status(200).send("done");
  } catch (err) {
    console.error(err);
    res.status(500).send("err");
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
