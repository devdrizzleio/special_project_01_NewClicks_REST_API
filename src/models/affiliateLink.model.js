import mongoose from "mongoose";

const affiliateLinkSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },

    affiliateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    trackingCode: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

const AffiliateLink = mongoose.model("AffiliateLink", affiliateLinkSchema);

export { AffiliateLink };