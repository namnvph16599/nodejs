import User from "../model/user";

export const signup = async (req, res) => {
  try {
    const user = await new User(req.body).save();
    res.json(user);
  } catch (err) {
    res.status(400).json({
      message: "Dang ki that bai",
    });
  }
};

export const signin = async (req, res) => {
    console.log(req.params.email);
    console.log(req.params.pass);

  try {
    const user = await find({
      email: req.params.email,
      password: req.params.pass,
    });
    res.json(user);
  } catch (err) {
    res.status(400).json({
      message: "Dang nhap that bai",
    });
  }
};

