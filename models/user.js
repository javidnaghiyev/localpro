import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email is already registered']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        match: [/^(?=.*[A-Z]).{8,25}$/, 'Password must be between 8-25 characters and include an uppercase letter']
    },
    image: {
        type: String
    }
})

userSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const User = models.User || model("User", UserSchema)

export default User