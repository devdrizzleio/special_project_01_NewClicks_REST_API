import mongoose from "mongoose";

const trackingEventSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["CLICK", "PURCHASE"],
      required: true
    },

    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },

    affiliateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);

const TrackingEvent = mongoose.model("TrackingEvent", trackingEventSchema);

export { TrackingEvent };