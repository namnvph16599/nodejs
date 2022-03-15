import mongoose from "mongoose";
//khowir taoj models
const Product = mongoose.model("Product", {
  name: String,
  price: Number,
  image: String,
  cateId: Number,
  description: String,
});

//method

// get all products
export const getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: "Lỗi không tìm được sản phẩm",
    });
  }
};

export const get = async (req, res) => {
  // products.map((val) => {
  //   if (val.id === +req.params.id) {
  //     res.json(val);
  //   }
  // });
  try {
    const products = await Product.findOne({ _id: req.params.id });
    res.json(products);
  } catch (err) {
    res.status(400).json({
      message: "Không tìm được sản phẩm có id như thế !",
    });
  }
};

//Method post api
export const post = async (req, res) => {
  try {
    const product = await new Product(req.body).save();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      messages: "Thêm thất bại",
    });
  }
};

//method delete
export const remove = async (req, res) => {
  // res.json(products.filter((item) => item.id !== +req.params.id));
  try {
    const products = await Product.findOneAndDelete({ _id: req.params.id });
    res.json(products);
  } catch (err) {
    res.status(404).json({
      message: "Xóa thất bại",
    });
  }
};

//method put
export const put = async (req, res) => {
  const condition = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const product = await Product.findOneAndUpdate(condition, doc, option);
    res.json(product);
  } catch (err) {
    res.status(400).json({
      message: "Cập nhật thất bại !",
    });
  }
};
