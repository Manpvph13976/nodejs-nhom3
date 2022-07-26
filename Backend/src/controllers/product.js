import Product from "../models/product";

export const list = async (req, res) => {
  try {
    const data = await Product.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(200).json({
      error: "Can't find list product",
    });
  }
};

export const read = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id }).exec();
    return res.status(200).json(product);
  } catch (error) {
    return res.status(200).json({
      error: "Can't find product",
    });
  }
};
