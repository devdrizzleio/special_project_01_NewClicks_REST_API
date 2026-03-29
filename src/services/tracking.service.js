import { TrackingEvent } from "../models/trackingEvent.model.js";

const createTrackingEvent = async ({ type, productId, affiliateId }) => {
  const event = await TrackingEvent.create({
    type,
    productId,
    affiliateId
  });

  return event;
};

export { createTrackingEvent };