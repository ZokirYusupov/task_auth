import User from '../models/User'
import { IUser } from '../dto/user.dto'
import { Request, Response } from 'express'
const login = async (req: Request, res: Response) => {
  const existUser = await User.findOne({email: req.body.email })
  if(existUser && existUser.password === req.body.password) {
   return res.json({
      code: 200,
      msg: 'Succes'
    })
  }

  res.json({
    code: 400,
    msg: "User email or pwd error"
  })
}

const register = async (req: Request, res: Response) => {
  try {
    const reqBody: IUser = req.body
  const existUser = await User.findOne({email: reqBody.email })

  if(!existUser) {
    const newUser = await User.create(reqBody)
     newUser.save()
    return res.json({
      msg: 'Succesfult',
      code: 201,
      user: newUser
     })
  }

  res.json({
    msg: 'User already exist'
  })
  res.redirect('/login')

  } catch (error) {
    throw error
  }
}

export  {
  register,
  login
}