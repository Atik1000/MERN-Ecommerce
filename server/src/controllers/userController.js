const isLoggedIn = (req, res, next) => {
  const login = true;
  if (login) {
    req.body.id = 101;
    next();
  } else {
    return res.status(401).json({ message: "You must be logged in" }).next();
  }
};

const getUsers = (req, res) => {
  console.log(req.body.id);
  res.status(200).send({
    message: "Hi there this is a new user",
  });
};

module.exports = { getUsers };
