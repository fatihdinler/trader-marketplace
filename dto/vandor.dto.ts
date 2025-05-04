export interface CreateVandorDto {
  name: string
  ownerName: string
  foodType: [string] // for array of strings
  pincode: string
  address: string
  phone: string
  email: string
  password: string
}