// import "dotenv/config";
const models = require("./models");

const seed = async () => {
  console.log("Beginning seed");

  // force true will drop the table if it already exists
  // such that every time we run seed, we start completely fresh
  await models.User.sync({ force: true });
  await models.venueAddress.sync({ force: true });
  await models.venue.sync({ force: true });
  await models.events.sync({ force: true });
  await models.whishlist.sync({ force: true });
  await models.purchased.sync({ force: true }).finally(() => {
    models.db.close();
  });

  console.log('Tables have synced!');
};

seed();
