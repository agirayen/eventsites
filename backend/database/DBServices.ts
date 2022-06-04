import { Sequelize } from 'sequelize';

const pguser = process.env.PGUSER;
const pgpass = process.env.PGPASSWORD;
const pgdatabase = process.env.PGDATABASE;
const pgport = process.env.PGPORT;

const connstring = `postgres://${pguser}:${pgpass}:${pgport}/${pgdatabase}`;
