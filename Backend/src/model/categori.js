import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    }
});

export default mongoose.model("Category", categorySchema)
