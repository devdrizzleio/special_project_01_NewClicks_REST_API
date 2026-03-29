import { v4 as uuidv4 } from "uuid";

const generateTrackingCode = () => {
  const rawId = uuidv4().replace(/-/g, "");

  const length = parseInt(process.env.TRACKING_CODE_LENGTH) || 12;

  return rawId.substring(0, length);
};

export { generateTrackingCode };