const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "bruce") {
    req.user = { name: "bruce", id: 7 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }

  // console.log("authorize");
  // next();
};
module.exports = authorize;
