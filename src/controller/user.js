import User from "../model/user";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const exitsUser = await User.findOne({ email }).exec();
    if (exitsUser) {
      res.json({
        message: "Email da ton tai",
      });
    }
    const user = await new User({ email, password, name }).save();
    res.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
    // const user = await new User(req.body).save();
    // res.json(user);
  } catch (err) {
    res.status(400).json({
      message: "Dang ki that bai",
    });
  }
};

export const signin = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) {
      res.json({
        message: "Email khong ton tai",
      });
    }

    if (!user.authenticate(password)) {
      res.json({
        message: "Sai mat khau",
      });
    }
    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
