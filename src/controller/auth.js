import User from "../model/user";
import jwt from "jsonwebtoken";

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

// dang nhap
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
    const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: 60 * 60 });
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const put = async (req, res) => {
  const condition = { id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const user = await User.findOneAndUpdate(condition, doc, option);
    const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: 60 * 60 });
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: "Cập nhật thất bại !",
    });
  }
};