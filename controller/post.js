import mongoose from "mongoose";

const Post = mongoose.model("Post", {
  title: String,
  content: String,
  created_at: String,
  image: String,
});

//method

//getAll posts

export const getAll = async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (err) {
    res.status(400).json({
      message: "Khong co bai post nao",
    });
  }
};

export const get = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    res.json(post);
  } catch (err) {
    res.status(400).json({
      message: "Khong tim thay post co id nhu the",
    });
  }
};

export const post = async (req, res) => {
  try {
    const post = await Post(req.body).save();
    res.json(post);
  } catch (err) {
    res.status(400).json({
      message: "Khong them duoc post",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({ _id: req.params.id });
    res.json(post);
  } catch (err) {
    res.status(400).json({
      message: "Khong xoa duoc post",
    });
  }
};

export const put = async (req, res) => {
  const condition = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const post = await Post.findOneAndUpdate(condition, doc, option);
    res.json(post);
  } catch (err) {
    res.status(400).json({
      message: "Khong sua duoc san pham",
    });
  }
};
