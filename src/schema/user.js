import mongoose from "mongoose";


/**
 * @swagger
 * components:
 *  schemas:
 *  User:
 *    Type: object
 *    required:
 *      - id
 *      - password
 *    properties:
 *      id:
 *        type: string
 *      password:
 *        type: string
 * 
 *      example:
 *        id: mhm0627
 *        password: 1234
 */
const UserSchema = new mongoose.Schema({
  id: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

const UserModel = mongoose.model("User", UserSchema);

export {UserModel, UserSchema };