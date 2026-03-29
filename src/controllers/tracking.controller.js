import { TrackingEvent } from "../models/trackingEvent.model.js";

const trackClick = async (req, res) => {
  try {
    const { productId, affiliateId } = req.query;

    await TrackingEvent.create({
      type: "CLICK",
      productId,
      affiliateId
    });

    res.status(200).json({
      success: true,
      message: "Click tracked successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const trackPurchase = async (req, res) => {
  try {
    const { productId, affiliateId } = req.body;

    await TrackingEvent.create({
      type: "PURCHASE",
      productId,
      affiliateId
    });

    res.status(201).json({
      success: true,
      message: "Purchase tracked successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export { trackClick, trackPurchase };