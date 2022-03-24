export const checkAuth = (req, res, next) => {
  const status = true;
  if (status) {
    console.log("Auth");
    next();
  } else {
    console.log("Not Auth");
  }
};
