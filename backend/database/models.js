const {Sequelize, DataTypes} = require("sequelize");

// const pguser = process.env.PGUSER;
// const pghost = process.env.PGHOST;
// const pgpass = process.env.PGPASSWORD;
// const pgdatabase = process.env.PGDATABASE;
// const pgport = process.env.PGPORT;

//  const connstring = `postgres://${pguser}:${pgpass}@${pghost}:${pgport}/${pgdatabase}`;

const connstring = `postgres://postgres:postgrespw@localhost:5432/Events`;

const db = new Sequelize(connstring);
const User = db.define('users', {
  user_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: "users_username_key",
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  created_on: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  last_login: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: "users",
  indexes: [
    {
      name: "users_pkey",
      unique: true,
      fields: [
        { name: "user_id" },
      ],
    },
    {
      name: "users_username_key",
      unique: true,
      fields: [
        { name: "username" },
      ],
    },
  ],
});

const venueAddress = db.define('venue_address', {
  address_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  state_name: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  address_line_1: {
    type: DataTypes.STRING(1000),
    allowNull: true,
  },
}, {
  tableName: "venue_address",
  indexes: [
    {
      name: "venue_address_pkey",
      unique: true,
      fields: [
        { name: "address_id" },
      ],
    },
  ],
});

const venue = db.define('venue', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  venue_id: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  postal_code: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  address_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'venue_address',
      key: 'address_id',
    },
  },
}, {
  tableName: "venue",
  indexes: [
    {
      name: "venue_pkey",
      unique: true,
      fields: [
        { name: "id" },
      ],
    },
  ],
});

const events = db.define('events', {
  event_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  event_name: {
    type: DataTypes.STRING(2000),
    allowNull: false,
    unique: "events_event_name_key",
  },
  venue_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'venue',
      key: 'id',
    },
  },
  url: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  event_type: {
    type: DataTypes.STRING(250),
    allowNull: true,
  },
  startdate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: "events",
  indexes: [
    {
      name: "events_event_name_key",
      unique: true,
      fields: [
        { name: "event_name" },
      ],
    },
    {
      name: "events_pkey",
      unique: true,
      fields: [
        { name: "event_id" },
      ],
    },
  ],
});

const whishlist = db.define('whishlist', {
  whishlist_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  event_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: "whishlist",
  indexes: [
    {
      name: "whishlist_pkey",
      unique: true,
      fields: [
        { name: "whishlist_id" },
      ],
    },
  ],
});

const purchased = db.define('purchased', {
  purchase_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  event_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: "purchased",
  indexes: [
    {
      name: "purchased_pkey",
      unique: true,
      fields: [
        { name: "purchase_id" },
      ],
    },
  ],
});

module.exports = {
  db,
  User,
  venueAddress,
  venue,
  events,
  whishlist,
  purchased,
};
