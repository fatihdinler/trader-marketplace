import { Request, Response, NextFunction } from 'express'
import { CreateVandorDto } from '../dto'
import { Vandor } from '../models'
import { generatePassword, generateSalt } from '../utility'

export const createVandor = async (req: Request, res: Response, next: NextFunction) => {
  // We'll accept the specific parameters only, which is we have created inside the dto
  const { name, address, pincode, foodType, email, ownerName, password, phone } = <CreateVandorDto>req.body

  const existingVendor = await Vandor.findOne({ email: email })
  if (existingVendor !== null) {
    res.json({ error: 'A vandor exists with this email address' })
    return
  }

  const salt = await generateSalt()
  const hashedPassword = await generatePassword(password, salt)

  const createdVandor = await Vandor.create({
    name,
    address,
    pincode,
    foodType,
    email,
    password: hashedPassword,
    salt,
    ownerName,
    phone,
    rating: 0,
    serviceAvailable: false,
    coverImages: [],
  })

  res.json(createdVandor)
}

export const getVandors = async (req: Request, res: Response, next: NextFunction) => {

}


export const getVandorById = async (req: Request, res: Response, next: NextFunction) => {

}