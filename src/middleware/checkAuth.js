import expressJWT from "express-jwt";
import req from "express/lib/request";

export const checkAuth = (req, res, next) => {
  const status = true;
  if (status) {
    console.log("Auth");
    next();
  } else {
    console.log("Not Auth");
  }
};

export const requireSignin = expressJWT({
  algorithms: ["HS256"],
  secret: "123456",
  requestProperty: "auth",
});

export const isAuth = (req, res, next) => {
  const status = req.profile.id == req.auth._id;
  if (!status) {
    res.status(400).json({ message: "Ban khong co quyen truy cap" });
  }
  next();
};
