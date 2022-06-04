import {DataTypes, Model} from "sequelize";
//import bcrypt from "bcrypt";
import {db} from "../DBServices";

interface User extends Model {
    email: string,
    password: string,
    user_name: string,
    user_id:string,
    create_on:Date,
    last_login:Date,
  }
  
  export const User = db.define<User>('users', {
    user_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_on: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    last_login: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  },
  );
  