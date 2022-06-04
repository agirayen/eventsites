import {db} from "../DBService";
import {DataTypes, Model} from "sequelize";

interface Events extends Model {
    event_type: string,
    venue_id : string,
    event_name: string,
    event_id:string,
    url:Date,
    start_date:Date,
  }
  
  export const Events = db.define<Events>('users', {
    event_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    venue_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      event_type: {
        type: DataTypes.date,
        allowNull: true,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  );
  