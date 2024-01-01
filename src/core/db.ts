import mongoose from 'mongoose'
 async function connection() {
  try {
   await mongoose.connect(process.env.DB_URI!, {})
    console.log('Db successfuly connected');

  } catch (error) {
    throw new Error('Db error')
  }
}

export default connection