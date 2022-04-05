import User from "../model/user";

export const userById = async (req, res, next, id) => {
  try {
    const user = await User.findById(id).exec(); //tìm user từ id pram
    //kiểm tra
    if (!user) {
      res.status(400).json({
        message: "Không tìm thấy user",
      });
    }
    //nếu mà có user thì sẽ thêm thuộc tính ở req và gán user tìm được vào
    req.profile = user;
    next();
  } catch (error) {
    console.log(error);
  }
};

export const isAdmin = async (req, res, next) => {
  if (req.profile.role == 0) {
    res.status(400).json({ message: "Bạn không phải Admin" });
  }
  next();
};
