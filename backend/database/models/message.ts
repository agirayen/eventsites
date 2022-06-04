import {DataTypes, Model} from "sequelize";
import {db} from "../DBService";
import {User} from "./User";

interface Message extends Model {
  message: string,
  User_id: number,
}

export const Message = db.define<Message>('messages', {
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.STRING,
    references: {
      model: User,
      key: "email",
    },
  },
});