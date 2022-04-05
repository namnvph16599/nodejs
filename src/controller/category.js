import Category from "../model/category";
import Product from "../model/products";

export const post = async (req, res) => {
  try {
    const cate = await new Category(req.body).save();
    res.json(cate);
  } catch (error) {
    res.status(400).json({ message: "Không thêm được category" });
  }
};

export const getAll = async (req, res) => {
  try {
    const cate = await Category.find().exec();
    res.json(cate);
  } catch (error) {
    res.status(400).json({ message: "Khong list dc category"});
  }
};

// export const get = async (req, res) => {
//   try {
//     const cate = await Category.findOne({ _id: req.params.id}).exec();
//     res.json(cate);
//   } catch (error) {
//     res.status(400).json({ message: "Khong get dc category" + error });
//   }
// };

export const getAllWithProducts = async (req, res) => {
  console.log(req.params.id);
  try {
    const category = await Category.findOne({ _id: req.params.id }).exec();
    const products = await Product.find({ category }).exec();
    res.json({ category, products });
  } catch (error) {
    res.status(400).json({ message: "Khong list dc category" });
  }
};

export const remove = async (req, res) => {
  try {
    const cate = await Category.findOneAndDelete({ _id: req.params.id });
    res.json(cate);
  } catch (error) {
    res.status(400).json({ message: "Khong xoa duoc caetegory" });
  }
};

export const put = async (req, res) => {
  const condition = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const cate = await Category.findOneAndUpdate(condition, doc, option);
    res.json(cate);
  } catch (err) {
    res.status(400).json({ message: "Khong update dc category" });
  }
};
