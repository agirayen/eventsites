import {DataTypes, Model} from "sequelize";
import {db} from "../DBService";
import {User} from "./User";


interface Profile extends Model {
  name: string,
  userId: number,
  profileUrl: string,
}

export const Profile = db.define<Profile>('profiles', {
  name: {
    type: DataTypes.STRING,
    allowNull: false, 
  },

  userId: {
    type: DataTypes.STRING,
    unique: true,
    references: {
      model: User,
      key: "email",
    },
  },
  
  profileUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});