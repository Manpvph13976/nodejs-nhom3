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
