import { Schema, Document, model} from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  first_name: String,
  phone_number: {
    type: String,
    default: "+998"
  },
  password: String
})
const User = model('user', UserSchema)
export default User