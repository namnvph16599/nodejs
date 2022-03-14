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
    const post = await Post.find({ _id: req.params.id });
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
    const post = await Post.remove({ _id: req.params.id });
    res.json(post);
  } catch (err) {
    res.status(400).json({
      message: "Khong xoa duoc post",
    });
  }
};

export const put = async (req, res) => {
  try {
    const post = await Post.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          created_at: req.body.created_at,
          image: req.body.image,
        },
      }
    );
    res.json(req.body);
  } catch (err) {
    res.status(400).json({
      message: "Khong sua duoc san pham",
    });
  }
};
