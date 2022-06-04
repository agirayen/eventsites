import { User } from "../database/models/User";

export function createUser(req, res) {

  const email = req.body.email;
  const password = req.body.password;
  console.log(`create user ${email}:${password}`);
  User.create({ email, password })
    .then(() => {
      console.log("Created user");
      res.status(200).json({ message: "Created user" });
    })
    .catch((err) => {
      console.log('failed to create users');
      console.log(err);
      res.status(500).json({ message: err });
    });

}