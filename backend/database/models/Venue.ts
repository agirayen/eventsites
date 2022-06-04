import {db} from "../DBServices";
import {DataTypes, Model} from "sequelize";

interface Venue extends Model {
    venue_type: string,
    venue_id : string,
    venue_name: string,
    event_id:string,
    postal_code:string,
    address:string,
  }
  
  export const Venue = db.define<Venue>('users', {
    event_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
    venue_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    venue_id: {
      type: DataTypes.STRING,

      allowNull: false,
    },
    venue_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postal_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  );