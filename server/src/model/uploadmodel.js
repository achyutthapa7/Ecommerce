import mongoose from "mongoose";
const uploadSchema = mongoose.Schema(
  {
    productTitle: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: true,
    },
    newPrice: {
      type: Number,
      required: true,
    },
    category: { type: String },
    productImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const uploadModel = mongoose.model("Product_Details", uploadSchema);
