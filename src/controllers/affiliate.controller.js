import { AffiliateLink } from "../models/affiliateLink.model.js";
import { v4 as uuidv4 } from "uuid";

const createAffiliateLink = async (req, res) => {
  try {
    const { productId, affiliateId } = req.body;

    const trackingCode = uuidv4();

    const link = await AffiliateLink.create({
      productId,
      affiliateId,
      trackingCode
    });

    res.status(201).json({
      success: true,
      data: link
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export { createAffiliateLink };