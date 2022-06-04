import {db} from "../DBServices";
import {DataTypes, Model} from "sequelize";

interface VenueAddress extends Model {
    address_id : string,
    city: string,
    state  : string,
    country:string,
    address:string,
  }
  
  export const VenueAddress = db.define<VenueAddress>('users', {
    address_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  );