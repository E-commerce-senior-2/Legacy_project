import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import dotenv from "dotenv"

const prisma = new PrismaClient();

export const signup = async (req: Request, res: Response): Promise<void> => {
  console.log(req.body);
  
  const { fullName, userName, email, password, dateBirth } = req.body;
  try {
    if (req.params.role === "user") {
      const existingUserCount = await prisma.user.count({
        where: { email },
      });
      if (existingUserCount !== 0) {
        res.status(409).send("userAlreadyexist");
      } else if (existingUserCount === 0) {
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
        res.status(200).json(user);
      }
    } else if (req.params.role === "creator") {
      const existingUserCount = await prisma.creator.count({
        where: { email },
      });
      console.log("ddddddd", existingUserCount);
      if (existingUserCount !== 0) {
        res.status(409).send("userAlreadyexist");
      } else if (existingUserCount === 0) {
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
        res.status(200).json(user);
      }
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const signin = async (req: Request, res: Response): Promise<void> => {
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
    } else {
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        user[0].password
      );
      const {password,...other } = user[0];

      if (!isPasswordCorrect) {
        res.status(409).send("password incorrect");
      } else {
        const token = jwt.sign({ id: user[0].id }, "jwtkey");

        res
          .cookie("access_token", token, { httpOnly: true })
          .status(200)

          .send(other);
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("error");
  }
};

export const signing = async (req: Request, res: Response) => {
  const fullName: string = req.body.fullName;
  console.log(fullName);
  const email: string = req.body.email;
  console.log(email);

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
    if (req.params.role === "creator") {
      User = await prisma.creator.findMany({
        where: { email: req.body.email },
      });
    } else {
      User = await prisma.user.findMany({ where: { email: req.body.email } });
    }
    console.log(User);

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

export const resetPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await prisma.user.findMany({ where: { email: email } });
  if (!user || user.length === 0) {
    return res.status(200).send({ status: 'User Not Existed !' });
  } else {
    const token = jwt.sign({ id: user[0].id }, "jwtkey");
   
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'bilelbourgou@gmail.com',
        pass: 'gzgw fkol tpyq alhg'
      }
    });

    const mailOptions = {
      from: 'bilelbourgou@gmail.com',
      to: email,
      subject: 'Reset Password Link',
      text: `http://localhost:3000/reset-password/${user[0].id}/${token}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.status(500).send({ status: 'Error sending email' });
      } else {
        return res.status(200).send({status:'Success'});
      }
    });
  }
};

export const updatePassword = async (req: Request, res: Response) => {
  const {id,token} = req.params
  const {password} = req.body
  
  jwt.verify(token,"jwtkey",(err,decoded) => {
      console.log(token);
      
    if(err) {
      return res.status(203).send(err)
    }else{
      const salt = bcryptjs.genSaltSync(5);
      const hashedPassword = bcryptjs.hashSync(password, salt);
      const updateUser = prisma.user.update({
        where: {id:+id},
        data:{
          password:hashedPassword
        }
      })
      .then((user) => res.send({status: 'success'}))
      .catch((err) => res.send({status: err}))
    }
  })
};
